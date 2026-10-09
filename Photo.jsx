export default function Photo({ alt, eager = false }) {
  return (
    <div className="photo">
      <img src="/images/vasanth.jpg" alt={alt} width="660" height="760" loading={eager ? 'eager' : 'lazy'} />
    </div>
  )
}
