import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border border-purple-500/20",
        "bg-gradient-to-b from-purple-900/30 to-purple-900/10",
        "p-4 text-start sm:p-6",
        "hover:from-purple-900/40 hover:to-purple-900/20",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-colors duration-300 ",
        className
      )}
    >
      <div className="flex items-center gap-3 ">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-violet-300">
            {author.name}
          </h3>
          <p className="text-sm text-white">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-violet-100 ">
        {text}
      </p>
    </Card>
  )
}