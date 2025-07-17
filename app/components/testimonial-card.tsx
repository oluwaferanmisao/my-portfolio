interface TestimonialCardProps {
  quote: string
  author: string
  position?: string
  className?: string
}

export function TestimonialCard({ quote, author, position, className = "" }: TestimonialCardProps) {
  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 max-w-xs ${className}`}>
      <div className="mb-4">
        <span className="text-2xl text-gray-400">"</span>
        <p className="text-sm text-gray-300 leading-relaxed">{quote}</p>
        <span className="text-2xl text-gray-400">"</span>
      </div>
      <div>
        <p className="text-white font-medium text-sm">-{author}</p>
        {position && <p className="text-gray-400 text-xs">{position}</p>}
      </div>
    </div>
  )
}
