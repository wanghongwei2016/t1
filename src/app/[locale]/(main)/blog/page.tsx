import Image from "next/image"
import { Link } from "@/navigation"
import blogList from "./blogList"

export const runtime = "edge"

export default async function BlogListPage() {
  return (
    <>
      <div className="relative">
        {blogList.map((item, i) => (
          <div
            key={i}
            className="relative float-left"
            style={{ width: "33.33%", height: "766px" }}
          >
            <div
              className="f fy absolute overflow-hidden bg-[#2F2F2F]"
              style={{
                left: "3px",
                right: "3px",
                top: "3px",
                bottom: "3px",
                borderRadius: "10px",
              }}
            >
              <Image
                className=""
                style={{ width: "100%" }}
                src={item.image}
                alt={item.title}
              />
              <div className="f-1 f fy relative mx-3 py-3">
                <div className="f fy fcc f26 relative">{item.title}</div>
                <div className="f fx fcc fme f18 relative text-[#F143FF]">
                  {item.date}
                </div>
                <div className="f fy fcc f16 relative">{item.description}</div>

                <div className="f-1"></div>
                <div className="f fx fcc fme relative">
                  <Link href={`/blog/${item.id}`}>
                    <span>Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="clear-both"></div>
      </div>
    </>
  )
}
