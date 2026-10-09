import { Phone, Mail, MapPin } from 'lucide-react'
import { profile } from '../data.js'
import Photo from './Photo.jsx'

export default function Contact() {
  return (
    <section id="contact" className="alt">
      <div className="wrap contact">
        <div>
          <p className="kicker">Let's talk</p>
          <h2 className="big">Get in <span>touch</span></h2>
          <p className="lede">Have a campaign, a brand, or a search-visibility problem to solve?</p>
          <div className="row"><Phone size={18} /><div><small>Phone</small><a href={profile.phoneHref}>{profile.phone}</a></div></div>
          <div className="row"><Mail size={18} /><div><small>Email</small><a href={`mailto:${profile.email}`}>{profile.email}</a></div></div>
          <div className="row"><MapPin size={18} /><div><small>Location</small><span>{profile.location}</span></div></div>
        </div>
        <Photo alt="Vasanth Kumar" />
      </div>
    </section>
  )
}
