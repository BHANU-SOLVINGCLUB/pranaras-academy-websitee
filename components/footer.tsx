import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/logo-light.png"
              alt="Pranaras Academy"
              width={160}
              height={45}
              className="h-8 w-auto dark:hidden"
            />
            <Image
              src="/logo-dark.png"
              alt="Pranaras Academy"
              width={160}
              height={45}
              className="hidden h-8 w-auto dark:block"
            />
            <p className="text-sm text-muted-foreground">Build Skills. Shape Futures.</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Training Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/social-impact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Social Impact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Soft Skills Training</li>
              <li className="text-sm text-muted-foreground">Leadership Development</li>
              <li className="text-sm text-muted-foreground">Corporate Training</li>
              <li className="text-sm text-muted-foreground">Life Coaching</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>info@pranarasacademy.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pranaras Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
