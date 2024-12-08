"use client"
import { ScrollArea } from "@/components/ScrollArea"
import { ReactNode } from "react"
import AlbumsComponent from "./@albums/page"

export default function Layout({
  children,
  albums,
}: {
  children: ReactNode
  albums: ReactNode
}) {
  // return (
  //   <ScrollArea className="min-h-0 flex-1">
  //     <div className="flex divide-x overflow-hidden rounded-[21px] border-[2px] border-white bg-[#5a3d5d]/[.49] py-4">
  //       {children}
  //       {albums}
  //     </div>
  //   </ScrollArea>
  // )
  return (
    <>
      {/* <div className="f-1 f fx relative divide-x overflow-hidden rounded-[21px] border-[2px] border-white bg-[#5a3d5d]/[.49] py-4"> */}
      {children}
      {/* {albums} */}
      {/* </div> */}
    </>
  )
}
