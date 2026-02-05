"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function KontaktPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    message: "",
    email: "",
    phone: "",
    name: "",
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
        {/* Background pattern - topographic lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 1000 800" preserveAspectRatio="none">
            <path d="M0,100 Q250,50 500,100 T1000,100" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
            <path d="M0,200 Q250,150 500,200 T1000,200" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
            <path d="M0,300 Q250,250 500,300 T1000,300" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
            <path d="M0,400 Q250,350 500,400 T1000,400" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
            <path d="M0,500 Q250,450 500,500 T1000,500" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
            <path d="M0,600 Q250,550 500,600 T1000,600" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
            <path d="M0,700 Q250,650 500,700 T1000,700" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className={`mb-12 lg:mb-16 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Kontakt
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Imate pitanje ili sugestiju? Kontaktirajte nas popunjavanjem forme ili putem jednog od brojeva telefona.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Contact Form */}
            <div className={`lg:col-span-1 transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-foreground text-sm mb-2">
                    Vaša poruka <span className="text-primary">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Unesite vašu poruku, pitanje, sugestiju..."
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-foreground text-sm mb-2">
                    Kontakt Email adresa <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-foreground text-sm mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-foreground text-sm mb-2">
                    Ime i prezime
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full"
                >
                  Pošalji
                </Button>
              </form>
            </div>

            {/* Contact Methods */}
            <div className={`transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="space-y-6">
                {/* Phone */}
                <a href="tel:+381691705023" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Phone className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-foreground/80 group-hover:text-primary transition-colors">
                    (+381) 69 170 50 23
                  </span>
                </a>

                {/* WhatsApp / Viber */}
                <div className="flex items-center gap-4">
                  <a href="https://wa.me/381691705023" className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary/50 transition-colors group">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a href="viber://chat?number=%2B381691705023" className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary/50 transition-colors group">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" fill="currentColor">
                      <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.538 6.692.448 9.837c-.089 3.145-.205 9.048 5.534 10.652h.006l-.006 2.421s-.038.98.609 1.177c.782.245 1.242-.506 1.99-1.315.411-.446.972-1.1 1.397-1.6 3.85.323 6.81-.416 7.15-.528.784-.261 5.22-.823 5.942-6.716.744-6.07-.353-9.907-2.332-11.627-.001 0-.001 0 0 0-1.217-1.099-4.039-2.266-8.111-2.296-.246-.001-.49-.003-.737-.002l.036-.003zm.12 1.953h.574c3.491.028 5.96.964 7.04 1.937 1.542 1.337 2.545 4.476 1.903 9.62-.596 4.88-4.13 5.324-4.781 5.543-.28.092-2.905.72-6.218.534 0 0-2.464 2.975-3.232 3.748-.12.122-.26.168-.353.144-.132-.033-.168-.192-.167-.423l.018-4.063c-4.761-1.324-4.475-6.114-4.405-8.792.074-2.644.697-4.761 2.063-6.085 1.793-1.66 5.21-2.124 7.558-2.163zm-.057 2.81c-.179 0-.179.27 0 .273 1.568.012 2.99.55 3.98 1.565.991 1.015 1.464 2.328 1.507 3.875.003.182.276.177.273 0-.046-1.658-.563-3.086-1.645-4.192-1.08-1.106-2.622-1.697-4.315-1.52l-.001-.001zm.168 1.209c-.17-.009-.186.25-.013.261 1.175.08 2.086.476 2.783 1.199.697.722 1.063 1.631 1.135 2.754.012.17.263.155.254-.014-.078-1.22-.487-2.237-1.27-3.048-.782-.81-1.791-1.247-3.09-1.342l-.001-.008.002-.002zm-3.275 1.058c.193.003.396.039.583.118.002 0 .003.002.005.002l.013.006c.187.085.339.236.531.557.258.428.541.98.694 1.297.157.327.189.59.05.848-.086.16-.268.373-.48.584-.21.211-.445.398-.582.525-.274.258-.257.268-.148.453.443.75 1.016 1.429 1.696 2.017.757.656 1.62 1.154 2.549 1.498.188.064.317.054.453-.039.137-.093.626-.684.801-.93.173-.247.349-.205.584-.12l.012.006c.307.127 1.195.56 1.768.852l.193.097c.239.122.406.239.477.405.09.216.092.592-.026 1.067-.116.475-.663 1.03-1.212 1.295-.48.232-1.091.334-1.708.282-.912-.077-1.995-.416-3.37-1.072a12.168 12.168 0 01-3.68-2.78c-.492-.551-.954-1.18-1.328-1.88l-.009-.013-.009-.014c-.312-.512-.594-1.117-.698-1.779-.105-.663-.014-1.392.362-2.018.02-.033.04-.065.063-.095l.01-.013.009-.013c.164-.225.336-.459.523-.62.188-.161.4-.288.667-.29h.604v.001h.001zm2.88.912c-.167-.02-.194.242-.024.264.96.124 1.66.515 2.177 1.082.517.566.793 1.282.849 2.156.01.164.261.147.254-.02-.06-.96-.37-1.77-.962-2.418-.592-.648-1.397-1.088-2.493-1.254l-.001.008v-.018z"/>
                    </svg>
                  </a>
                </div>

                {/* WeChat */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-foreground/70" />
                  </div>
                  <span className="text-foreground/80">
                    +381691705023
                  </span>
                </div>

                {/* Email */}
                <a href="mailto:office@htdtransfers.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Mail className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-foreground/80 group-hover:text-primary transition-colors">
                    office@htdtransfers.com
                  </span>
                </a>

                {/* Social Media */}
                <div className="flex items-center gap-3 pt-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all group">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all group">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" fill="currentColor">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all group">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" fill="currentColor">
                      <path d="M12.006 0C6.547 0 2.665 3.328 2.665 7.918c0 2.347.905 4.477 2.968 5.96.227.139.39.29.45.525.06.266.173.831.227 1.052.076.302.029.56-.238.708-1.83.888-1.786.858-1.53.858.524 0 2.126-1.246 2.918-1.795.233-.162.54-.218.812-.166.93.178 1.899.27 2.9.27 5.459 0 9.339-3.327 9.339-7.918C20.51 3.327 16.586 0 12.006 0zM7.25 9.876c-.652 0-1.18-.572-1.18-1.278 0-.707.528-1.28 1.18-1.28.651 0 1.179.573 1.179 1.28 0 .706-.528 1.278-1.18 1.278zm4.753 0c-.652 0-1.18-.572-1.18-1.278 0-.707.528-1.28 1.18-1.28.651 0 1.179.573 1.179 1.28 0 .706-.528 1.278-1.18 1.278zm4.756 0c-.652 0-1.18-.572-1.18-1.278 0-.707.528-1.28 1.18-1.28.651 0 1.179.573 1.179 1.28 0 .706-.528 1.278-1.18 1.278z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className={`transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">HTD Transfers d.o.o.</p>
                    <p className="text-foreground/60">Cvetanova Ćuprija 107N</p>
                    <p className="text-foreground/60">11050 Beograd, Srbija</p>
                  </div>
                </div>

                {/* Legal Info */}
                <div className="pt-4 space-y-2">
                  <p className="text-foreground/60">PIB 113296920</p>
                  <p className="text-foreground/60">MB 21841234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
