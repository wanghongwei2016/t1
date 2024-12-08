import { Dialog, DialogContent, DialogTrigger } from "@/components/Dialog"
import { Dispatch, ReactNode, SetStateAction, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel"
import DisplayAlbum from "../../DisplayAlbum"
import { Album } from "@/lib/typing"
import {
  useDiamondProudctStore,
  useVipProudctStore,
} from "@/app/[locale]/(main)/useProudctStore"
import useAppStore from "@/app/[locale]/useAppStore"

export default function AlbumDialog({
  children,
  albums,
  setAlbums,
  start = 0,
}: {
  children: ReactNode
  albums: Album[]
  start?: number
  setAlbums: Dispatch<SetStateAction<Album[]>>
}) {
  const user = useAppStore((state) => state.user)?.me
  const { sm } = useAppStore((state) => state)
  // const user = { vip_level: true }
  const toggleVip = useVipProudctStore((state) => state.toggle)
  const [open, setOpen] = useState(false)
  return (
    <Dialog
      open={open && !!user?.vip_level}
      // open={open}
      onOpenChange={(open) => {
        if (!user?.vip_level) {
          toggleVip()
          setOpen(false)
        } else {
          setOpen(open)
        }
      }}
    >
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="h-screen max-w-none py-0 text-white">
        <Carousel opts={{ startIndex: start }}>
          <CarouselContent className="absolute inset-0">
            {albums.map((album) => (
              <CarouselItem
                key={album.id}
                className="relative z-50 flex justify-center"
              >
                <div
                  className="absolute inset-0"
                  onClick={() => {
                    setOpen(false)
                  }}
                />
                <DisplayAlbum
                  album={album}
                  update={(isLiked, likeNumber) => {
                    setAlbums((albums) => {
                      return albums.map((a) => {
                        if (a.id === album.id) {
                          album.is_favorite = isLiked ? 1 : 0
                          album.like_number = likeNumber
                          return album
                        }
                        return a
                      })
                    })
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-12 top-1/2 -translate-y-1/2">
            <CarouselPrevious />
          </div>
          <div className="absolute right-12 top-1/2 -translate-y-1/2">
            <CarouselNext />
          </div>
        </Carousel>
      </DialogContent>
    </Dialog>
  )
}
