import os
from PIL import Image

def convert_to_webp(folder_path):
  """Converts all images in a folder to WebP format.

  Args:
    folder_path: The path to the folder containing the images.
  """

  for root, _, files in os.walk(folder_path):
    for file in files:
      if file.lower().endswith(('.jpg', '.jpeg', '.png')):
        img_path = os.path.join(root, file)
        webp_path = os.path.splitext(img_path)[0] + '.webp'

        try:
          with Image.open(img_path) as img:
            img.save(webp_path, 'webp', quality=85)  # Adjust quality as needed
            print(f"Converted {img_path} to {webp_path}")
        except OSError as e:
          print(f"Error converting {img_path}: {e}")

if __name__ == '__main__':
  folder_path = input("Enter the folder path: ")
  convert_to_webp(folder_path)
