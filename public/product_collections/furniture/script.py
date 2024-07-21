import os
import argparse
from PIL import Image
from pillow_heif import register_heif_opener

# Register HEIC opener with Pillow library
register_heif_opener()

def convert_heic_to_jpeg(input_path, output_path, quality=95):
  """
  Converts a HEIC image to JPEG format.

  Args:
      input_path: Path to the HEIC image file.
      output_path: Path to save the converted JPEG image file.
      quality: JPEG image quality (0-100). Defaults to 95.
  """
  try:
    # Open the HEIC image
    image = Image.open(input_path)

    # Convert to RGB color mode (required for JPEG)
    image = image.convert("RGB")

    # Save as JPEG with specified quality
    image.save(output_path, "JPEG", quality=quality)
    print(f"Converted {input_path} to {output_path}")
  except OSError:
    print(f"Error converting {input_path}")

def convert_images_heic_to_jpeg(folder_path):
  # Loop through files in the folder
  for filename in os.listdir(folder_path):
    file_name, extension = os.path.splitext(filename)
    
    if extension.lower() == '.heic':
      # Construct input and output paths
      input_path = os.path.join(folder_path, filename)
      output_path = os.path.join(folder_path, os.path.splitext(filename)[0] + ".jpg")
      
      # Convert the HEIC image
      convert_heic_to_jpeg(input_path, output_path)

def rename_images(folder_path):
  for i, filename in enumerate(os.listdir(folder_path)):
    file_name, extension = os.path.splitext(filename)
    
    if extension.lower() not in (".jpg", ".jpeg", ".png", ".bmp", ".gif", '.heic'):
      continue

    new_filename = f"img_{i+1}{extension}"
    
    old_path = os.path.join(folder_path, filename)
    new_path = os.path.join(folder_path, new_filename)
    
    os.rename(old_path, new_path)
    print(f"Renamed {filename} to {new_filename}")

parser = argparse.ArgumentParser(description="Rename images in a folder")
parser.add_argument("task", help="Task to be performed on images")
parser.add_argument("folder_path", help="Path to the folder containing images")
  
args = parser.parse_args()

task = args.task
folder_path = args.folder_path

match(task):
  case "heic_to_jpeg":
    convert_images_heic_to_jpeg(folder_path)
  case "rename":
    rename_images(folder_path)
  case _:
    print("Invalid task. Choose either 'heic_to_jpeg' or'rename'.")
