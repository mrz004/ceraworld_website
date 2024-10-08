import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function () {
  return (
    <Footer bgDark className="rounded-none">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 sm:grid-cols-4 gap-8 px-6 py-8 ">
          <div>
            <Footer.Title title="Ceraworld" />
            <Footer.LinkGroup col>
              <Footer.Link as={Link} to="#">
                Sitemap
              </Footer.Link>
              <Footer.Link as={Link} to="about">
                About
              </Footer.Link>
              <Footer.Link as={Link} to="contact-us">
                Contact
              </Footer.Link>
              <Footer.Link
                as={Link}
                target="_blank"
                to="https://maps.app.goo.gl/X21pWnQW2ajh5Yvf6"
              >
                Locate
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Social Media" />
            <Footer.LinkGroup col>
              <Footer.Link as={Link} to="#">
                <Footer.Icon icon={BsInstagram} /> Instagram
              </Footer.Link>
              <Footer.Link as={Link} to="#">
                <Footer.Icon icon={BsFacebook} />
                Facebook
              </Footer.Link>
              <Footer.Link as={Link} to="#">
                <Footer.Icon icon={BsTwitter} /> Twitter
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Site Map" />
            <Footer.LinkGroup col>
              <Footer.Link as={Link} to="#">
                Page 1
              </Footer.Link>
              <Footer.Link as={Link} to="#">
                Page 2
              </Footer.Link>
              <Footer.Link as={Link} to="#">
                Page 3
              </Footer.Link>
              <Footer.Link as={Link} to="#">
                Page 4
              </Footer.Link>
              <Footer.Link as={Link} to="#">
                Page 5
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.LinkGroup col>
              <Footer.Link as={Link} to="#">
                Page 6
              </Footer.Link>
              <Footer.Link as={Link} to="#">
                Page 7
              </Footer.Link>
              <Footer.Link as={Link} to="#">
                Page 8
              </Footer.Link>
              <Footer.Link as={Link} to="#">
                Page 9
              </Footer.Link>
              <Footer.Link as={Link} to="#">
                Page 10
              </Footer.Link>
              <Footer.Link as={Link} to="#">
                Page 11
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}
