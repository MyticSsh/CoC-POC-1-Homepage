import { Card, CardContent } from "@/components/ui/card"
import { Code, Monitor, Smartphone } from "lucide-react"
import { SERVICES } from "@/constants/company"

export function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="h-6 w-6 text-primary" />
      case "Monitor":
        return <Monitor className="h-6 w-6 text-primary" />
      case "Smartphone":
        return <Smartphone className="h-6 w-6 text-primary" />
      default:
        return <Code className="h-6 w-6 text-primary" />
    }
  }

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Do</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer comprehensive software development services tailored to meet your business needs. Our expert team
              delivers cutting-edge solutions that drive success.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit mx-auto">{getIcon(service.icon)}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground mt-2">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
