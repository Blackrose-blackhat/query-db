interface TestimonialCardProps {
    quote: string
    author: string
    role: string
  }
  
  export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
    return (
      <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
        <div className="text-lg font-medium leading-relaxed">"{quote}"</div>
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    )
  }
  