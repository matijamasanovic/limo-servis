"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Calendar,
  User,
  Car,
  ArrowRight,
  ArrowLeft,
  Check,
} from "lucide-react";

interface ReservationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  vehiclePreference: string;
  firstName: string;
  lastName: string;
  phone: string;
  specialRequests: string;
}

const initialFormData: FormData = {
  pickupLocation: "",
  dropoffLocation: "",
  date: "",
  time: "",
  vehiclePreference: "",
  firstName: "",
  lastName: "",
  phone: "",
  specialRequests: "",
};

export function ReservationModal({
  open,
  onOpenChange,
}: ReservationModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after close animation
    setTimeout(() => {
      setStep(1);
      setFormData(initialFormData);
      setIsSubmitted(false);
    }, 300);
  };

  const isStep1Valid = formData.pickupLocation && formData.dropoffLocation;
  const isStep2Valid = formData.date && formData.time;
  const isStep3Valid = formData.vehiclePreference.trim().length > 0;
  const isStep4Valid =
    formData.firstName && formData.lastName && formData.phone;

  const stepIndicators = [
    { number: 1, icon: MapPin, label: "Destinacija" },
    { number: 2, icon: Calendar, label: "Datum" },
    { number: 3, icon: Car, label: "Vozilo" },
    { number: 4, icon: User, label: "Podaci" },
  ];

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold text-foreground mb-2">
              Zahtev je poslat!
            </DialogTitle>
            <DialogDescription className="text-foreground/60 mb-6">
              Hvala vam na interesovanju. Kontaktiraćemo vas uskoro sa potvrdom
              rezervacije.
            </DialogDescription>
            <Button
              onClick={handleClose}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Zatvori
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Rezervišite vožnju
          </DialogTitle>
          <DialogDescription className="text-foreground/60">
            Popunite formular u nekoliko koraka
          </DialogDescription>
        </DialogHeader>

        {/* Step Indicators */}
        <div className="flex items-center justify-between mb-6 px-2">
          {stepIndicators.map((indicator, index) => (
            <div key={indicator.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step >= indicator.number
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground/40"
                  }`}
                >
                  <indicator.icon className="w-5 h-5" />
                </div>
                <span
                  className={`text-xs mt-2 transition-colors ${
                    step >= indicator.number
                      ? "text-primary"
                      : "text-foreground/40"
                  }`}
                >
                  {indicator.label}
                </span>
              </div>
              {index < stepIndicators.length - 1 && (
                <div
                  className={`w-8 sm:w-12 h-0.5 mx-1 sm:mx-2 mb-6 transition-colors ${
                    step > indicator.number ? "bg-primary" : "bg-secondary"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Destination */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pickup" className="text-foreground">
                Polazna lokacija
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                <Input
                  id="pickup"
                  placeholder="npr. Aerodrom Tivat"
                  value={formData.pickupLocation}
                  onChange={(e) =>
                    updateFormData("pickupLocation", e.target.value)
                  }
                  className="pl-10 bg-secondary border-border text-foreground placeholder:text-foreground/40"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dropoff" className="text-foreground">
                Odredišna lokacija
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                <Input
                  id="dropoff"
                  placeholder="npr. Hotel Hilton, Podgorica"
                  value={formData.dropoffLocation}
                  onChange={(e) =>
                    updateFormData("dropoffLocation", e.target.value)
                  }
                  className="pl-10 bg-secondary border-border text-foreground placeholder:text-foreground/40"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-foreground">
                Datum
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => updateFormData("date", e.target.value)}
                className="bg-secondary border-border text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="text-foreground">
                Vreme
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => updateFormData("time", e.target.value)}
                className="bg-secondary border-border text-foreground"
              />
            </div>
          </div>
        )}

        {/* Step 3: Vehicle Preference */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="vehiclePreference" className="text-foreground">
                Koje vozilo želite?
              </Label>
              <div className="relative">
                <Car className="absolute left-3 top-3 w-4 h-4 text-foreground/40" />
                <Textarea
                  id="vehiclePreference"
                  placeholder="npr. Mercedes E klasa, crna boja, ili bilo koje luksuzno vozilo..."
                  value={formData.vehiclePreference}
                  onChange={(e) =>
                    updateFormData("vehiclePreference", e.target.value)
                  }
                  className="pl-10 bg-secondary border-border text-foreground placeholder:text-foreground/40 min-h-[100px] resize-none"
                />
              </div>
              <p className="text-xs text-foreground/50">
                Opišite željeno vozilo ili tip vozila. Kontaktiraćemo vas ako
                traženo vozilo nije dostupno.
              </p>
            </div>
          </div>
        )}

        {/* Step 4: Personal Info */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-foreground">
                  Ime
                </Label>
                <Input
                  id="firstName"
                  placeholder="Vaše ime"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  className="bg-secondary border-border text-foreground placeholder:text-foreground/40"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground">
                  Prezime
                </Label>
                <Input
                  id="lastName"
                  placeholder="Vaše prezime"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  className="bg-secondary border-border text-foreground placeholder:text-foreground/40"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Kontakt telefon
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+381 6X XXX XXXX"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                className="bg-secondary border-border text-foreground placeholder:text-foreground/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialRequests" className="text-foreground">
                Specijalne želje (opciono)
              </Label>
              <Textarea
                id="specialRequests"
                placeholder="npr. dečije sedište, dodatni prtljag..."
                value={formData.specialRequests}
                onChange={(e) =>
                  updateFormData("specialRequests", e.target.value)
                }
                className="bg-secondary border-border text-foreground placeholder:text-foreground/40 min-h-[80px] resize-none"
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-border">
          {step > 1 ? (
            <Button
              variant="outline"
              onClick={handleBack}
              className="border-border text-foreground hover:bg-secondary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Nazad
            </Button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <Button
              onClick={handleNext}
              disabled={
                (step === 1 && !isStep1Valid) ||
                (step === 2 && !isStep2Valid) ||
                (step === 3 && !isStep3Valid)
              }
              className="bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
            >
              Dalje
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isStep4Valid || isSubmitting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                  Slanje...
                </>
              ) : (
                <>
                  Pošalji zahtev
                  <Check className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
