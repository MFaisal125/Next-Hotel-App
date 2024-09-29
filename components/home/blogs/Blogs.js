import Container from "@/components/shared/container/Container";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import LoadImage from "@/components/shared/image/LoadImage";
import React from "react";
import BlogPosts from "./BlogPosts";

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="bg-contain h-full py-12"
      style={{
        backgroundImage: "url(/assets/home-page/blogs-and-travel-guide/bg.svg)",
        backgroundPosition: "125% 80%",
        // backgroundSize: "100% 100%",
      }}
    >
      <Container>
        <section className="w-full h-full flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-12">
            <article className="flex flex-col gap-y-4">
              <h1 className="lg:text-5xl md:text-4xl text-3xl whitespace-normal">
                <HighlightText>Blogs</HighlightText> & Guide&apos;s
                <LoadImage
                  src="/assets/home-page/destination/underline.svg"
                  alt="arrow"
                  height={7}
                  width={275}
                  className="mt-1.5"
                />
              </h1>
              <p className="text-base">
                Maldives reopens for tourism, offering stunning beaches and
                turquoise waters. Travel enriches lives, fostering personal
                growth.
              </p>
            </article>
          </div>

          <BlogPosts />
        </section>
      </Container>
    </section>
  );
};

export default Blogs;
