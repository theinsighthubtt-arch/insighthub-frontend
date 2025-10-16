import React from "react";
import { Button } from "./components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/Card";
import { Input } from "./components/ui/Input";
import { ArrowRight, BarChart3, LineChart, Brain, Globe2, Sparkles, ShieldCheck, Mail, CalendarDays, Clock, Quote } from "lucide-react";
import { motion } from "framer-motion";

const BRAND = {
  /*name: "Insight Hub TT",*/
  tagline: "Turning data into decisions.",
  primary: "from-orange-500 to-amber-500",
};

const LOGO_PATH = "/InsightHub_updated-removebg-preview.png";

export default function App() {
  const [contact, setContact] = React.useState({ name: "", email: "", company: "", message: "" });
  const [contactStatus, setContactStatus] = React.useState({ ok: null, msg: null });

  function onContactSubmit(e) {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.message) {
      setContactStatus({ ok: false, msg: "Please fill name, email, and your message." });
      return;
    }
    setContactStatus({ ok: true, msg: "Thanks! We’ll respond within one business day." });
    setContact({ name: "", email: "", company: "", message: "" });
  }

  const [booking, setBooking] = React.useState({ name: "", email: "", company: "", date: "", time: "", notes: "" });
  const [bookStatus, setBookStatus] = React.useState({ ok: null, msg: null });

  function onBookSubmit(e) {
    e.preventDefault();
    if (!booking.name || !booking.email || !booking.date || !booking.time) {
      setBookStatus({ ok: false, msg: "Please add your name, email, date and time." });
      return;
    }
    setBookStatus({ ok: true, msg: "Booking request received. We’ll confirm shortly via email." });
    setBooking({ name: "", email: "", company: "", date: "", time: "", notes: "" });
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <div className="w-full text-xs text-center bg-gradient-to-r from-slate-50 to-slate-100 text-slate-500 py-2">
        ✨ New: Complimentary 30-minute analytics assessment — book below
      </div>

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_PATH} alt="Insight Hub TT logo" className="h-20 w-24" />
            {/*<div className={`h-8 w-8 rounded-xl bg-gradient-to-br ${BRAND.primary}`} />*/}
            <span className="font-semibold tracking-tight">{BRAND.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-700">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#approach" className="hover:text-slate-900">Approach</a>
            <a href="#impact" className="hover:text-slate-900">Impact</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
            {/*<a href="#book" className="hover:text-slate-900">Book a call</a>*/}
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#book"><Button className="rounded-xl" size="sm">Book a call</Button></a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className={`absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${BRAND.primary}`} />
          <div className={`absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 bg-gradient-to-tr ${BRAND.primary}`} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight"
            >
              {BRAND.tagline}
              <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${BRAND.primary}`}>faster, safer, smarter.</span>
            </motion.h1>
            <p className="mt-5 text-slate-600 max-w-xl">
              We help growing businesses turn raw data into dashboards, predictions, and clear actions.
              From quick audits to end-to-end analytics platforms, we deliver impact in weeks — not months.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#book"><Button className="h-11 px-5">Start your free assessment <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
              <a href="#services"><Button variant="outline" className="h-11 px-5">See services</Button></a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/>Data privacy first</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4"/>GenAI where it fits</div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <Card className="rounded-2xl shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2"><BarChart3 className="h-4 w-4"/> KPI Dashboards</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">Clean, actionable visuals for execs and teams.</CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2"><LineChart className="h-4 w-4"/> Forecasting</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">Demand, sales, churn — modeled and monitored.</CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2"><Brain className="h-4 w-4"/> AI Assistants</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">Secure copilots for ops, finance, and service.</CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2"><Globe2 className="h-4 w-4"/> Data Platforms</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">ELT pipelines, warehouses, governance.</CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">What we do</h2>
            <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900">Get a scoped proposal →</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: "Dashboards", desc: "Executive and ops dashboards in Power BI, Tableau, or Looker."},
              {title: "Predictive Analytics", desc: "Forecast demand, sales, churn, and risk with practical models."},
              {title: "Performance Analytics", desc: "KPI design, benchmarking, and scorecards for teams and stores."},
              {title: "Prescriptive Analytics", desc: "What-if scenarios and recommendations to optimize decisions."}
            ].map((s, i) => (
              <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2"><CardTitle className="text-lg">{s.title}</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">{s.desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">Recent impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {kpi: "↑ 18%", label: "revenue lift from pricing optimization"},
              {kpi: "− 32%", label: "reporting time saved with automated pipelines"},
              {kpi: "↑ 21%", label: "retention from churn risk model"},
            ].map((m, i) => (
              <Card key={i} className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className={`text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${BRAND.primary}`}>{m.kpi}</div>
                  <div className="mt-2 text-sm text-slate-600">{m.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-16 border-y border-slate-100 bg-slate-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">How we work</h2>
          <ol className="grid md:grid-cols-4 gap-6 list-decimal list-inside">
            {["Assess & align", "Model & build", "Validate & ship", "Enable & scale"].map((step, i) => (
              <li key={i} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="text-sm font-medium">Step {i+1}</div>
                <div className="text-lg mt-1">{step}</div>
                <p className="text-sm text-slate-600 mt-2">Short, outcome-focused sprints with clear milestones.</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-3">Built for growing businesses</h2>
            <p className="text-slate-600">We partner with SMEs — especially restaurants, grocery stores, and finance teams — across Trinidad & Tobago and the wider Caribbean. Our team blends hands-on industry experience with modern data engineering and applied AI.</p>
            <div className="mt-5 flex gap-3 text-xs text-slate-500">
              <div className="px-3 py-1 rounded-full bg-slate-100">Trinidad & Tobago • Caribbean • Remote</div>
              <div className="px-3 py-1 rounded-full bg-slate-100">Power BI • SQL • Excel • GenAI</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-6 border border-slate-200">
            <ul className="space-y-3 text-sm">
              {[
                "Privacy by design — no surprise data exposure",
                "Clear ROI framing before build",
                "Ownership transfer + documentation",
                "Support options that fit your budget",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 border-t border-slate-100 bg-slate-50/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Pricing</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">Flexible plans for every business size. Start small and scale as your data needs grow.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tier: "Starter", desc: "Best for small businesses starting analytics", features: ["1 dashboard", "Basic support", "1-hour strategy session"] },
              { tier: "Growth", desc: "For growing companies expanding data use", features: ["3 dashboards", "Monthly insights review", "Priority email support"] },
              { tier: "Enterprise", desc: "Tailored analytics for large organizations", features: ["Custom KPIs", "Dedicated analyst", "Advanced modeling"] },
            ].map((plan, i) => (
              <Card key={i} className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{plan.tier}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${BRAND.primary}`}>{plan.price}</div>
                  <p className="text-slate-600 mt-2 mb-4">{plan.desc}</p>
                  <ul className="text-sm text-slate-700 space-y-1 mb-6">
                    {plan.features.map((f, j) => (
                      <li key={j}>✔ {f}</li>
                    ))}
                  </ul>
                  <a href="#book"><Button className="h-11 w-full">Select plan</Button></a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">What clients say</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">Hear from small business owners and teams who’ve transformed their operations with our analytics.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Maria G.", role: "Owner, Island Grocers", text: "DataScope TT helped us understand which products drive our profits. Sales reports now take minutes instead of hours." },
              { name: "David R.", role: "Manager, FinCore Consulting", text: "Their dashboards turned complex data into actionable insights. We make decisions faster and with confidence." },
              { name: "Elena S.", role: "Director, Café Caribe", text: "The team customized analytics that fit our needs perfectly. We’ve seen a clear boost in efficiency and customer retention." },
            ].map((t, i) => (
              <Card key={i} className="rounded-2xl shadow-sm bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Quote className="h-8 w-8 mb-3 text-orange-500" />
                  <p className="text-slate-700 italic mb-4">“{t.text}”</p>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t border-slate-100 bg-slate-50/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {q:"What industries do you focus on?", a:"SMEs across restaurants, groceries, and finance in Trinidad & Tobago and the Caribbean."},
              {q:"How long does a typical project take?", a:"Most pilots ship in 2–4 weeks; larger platforms 6–12 weeks depending on scope."},
              {q:"What tools do you use?", a:"Power BI, Tableau, Phython, R, Excel, and secure GenAI where it fits."},
              {q:"How do we start?", a:"Book a call for a free assessment. We’ll scope goals, data sources, and a plan with clear milestones."},
            ].map((item, i)=> (
              <Card key={i} className="rounded-2xl shadow-sm">
                <CardHeader className="pb-2"><CardTitle className="text-base">{item.q}</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">{item.a}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Book a call</h2>
          <p className="text-slate-600 mt-2">Choose a date and time that works for you. We’ll review your goals and suggest a plan.</p>
          <form onSubmit={onBookSubmit} className="mt-6 grid gap-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <Input value={booking.name} onChange={e=>setBooking(b=>({...b, name: e.target.value}))} placeholder="Full name" />
              <Input value={booking.email} onChange={e=>setBooking(b=>({...b, email: e.target.value}))} placeholder="Work email" type="email" />
            </div>
            <Input value={booking.company} onChange={e=>setBooking(b=>({...b, company: e.target.value}))} placeholder="Company (optional)" />
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="relative">
                <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input value={booking.date} onChange={e=>setBooking(b=>({...b, date: e.target.value}))} type="date" className="pl-9" />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input value={booking.time} onChange={e=>setBooking(b=>({...b, time: e.target.value}))} type="time" className="pl-9" />
              </div>
            </div>
            <textarea value={booking.notes} onChange={e=>setBooking(b=>({...b, notes: e.target.value}))} placeholder="What would you like to focus on?" className="h-32 rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 ring-slate-300" />
            <Button type="submit" className="h-11 w-full sm:w-auto">Request booking</Button>
            {bookStatus.msg && (
              <div className={`text-sm ${bookStatus.ok ? "text-green-600" : "text-red-600"}`}>{bookStatus.msg}</div>
            )}
          </form>
        </div>
      </section>

      {/* Contact 
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Ready to see what your data can do?</h2>
          <p className="text-slate-600 mt-2">Tell us about your goals. We’ll reply within one business day.</p>
          <form onSubmit={onContactSubmit} className="mt-6 grid gap-3 text-left">
            <div className="grid sm:grid-cols-2 gap-3">
              <Input value={contact.name} onChange={e=>setContact(c=>({...c, name: e.target.value}))} placeholder="Full name" />
              <Input value={contact.email} onChange={e=>setContact(c=>({...c, email: e.target.value}))} placeholder="Work email" type="email" />
            </div>
            <Input value={contact.company} onChange={e=>setContact(c=>({...c, company: e.target.value}))} placeholder="Company" />
            <textarea value={contact.message} onChange={e=>setContact(c=>({...c, message: e.target.value}))} placeholder="What problem are you trying to solve?" className="h-32 rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-2 ring-slate-300" />
            <Button type="submit" className="h-11 w-full sm:w-auto"><Mail className="mr-2 h-4 w-4"/> Send message</Button>
          </form>
          {contactStatus.msg && (
            <div className={`text-sm mt-3 ${contactStatus.ok ? "text-green-600" : "text-red-600"}`}>{contactStatus.msg}</div>
          )}
          <div className="text-xs text-slate-500 mt-3">By submitting, you agree to our privacy policy.</div>
        </div>
      </section> */}

      <footer className="border-t border-slate-100 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center gap-3">
            <img src={LOGO_PATH} alt="Insight Hub TT logo" className="h-20 w-24" />
            {/*<div className={`h-8 w-8 rounded-xl bg-gradient-to-br ${BRAND.primary}`} />*/}
            <div>
              <div className="font-semibold">{BRAND.name}</div>
              <div className="text-xs text-slate-500">© {new Date().getFullYear()} All rights reserved.</div>
            </div>
          </div>
          <div className="text-sm text-slate-600 md:text-right">Privacy • Terms • LinkedIn</div>
        </div>
      </footer>
    </div>
  );
}
