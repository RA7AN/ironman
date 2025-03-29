import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon, Clock, MapPin } from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

interface BookingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const [date, setDate] = useState<Date>()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col gap-0 p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle>Schedule New Pickup</DialogTitle>
          <DialogDescription>
            Enter the details for your laundry pickup
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6">
          {/* Map Section */}
          <div className="relative h-[200px] w-full rounded-lg overflow-hidden mb-6">
            {/* Mock Map Background */}
            <div className="absolute inset-0 bg-[#1A1B23]">
              {/* Horizontal Roads */}
              <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-primary/20"></div>
              <div className="absolute top-2/4 left-0 right-0 h-[1px] bg-primary/20"></div>
              <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-primary/20"></div>
              
              {/* Vertical Roads */}
              <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-primary/20"></div>
              <div className="absolute left-2/4 top-0 bottom-0 w-[1px] bg-primary/20"></div>
              <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-primary/20"></div>

              {/* Location Marker with Pulse Effect */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Pulse Rings */}
                  <div className="absolute -inset-4 bg-primary/10 rounded-full animate-ping"></div>
                  <div className="absolute -inset-8 bg-primary/5 rounded-full animate-pulse"></div>
                  {/* Marker */}
                  <div className="relative w-4 h-4 bg-primary rounded-full border-2 border-white shadow-glow"></div>
                </div>
              </div>

              {/* Map Labels */}
              <div className="absolute top-2 left-2 text-xs text-primary/40">
                Easter District
              </div>
              <div className="absolute bottom-2 right-2 text-xs text-primary/40">
                M4 Area
              </div>

              {/* Location Info Box */}
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-lg border border-primary/20 shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium">M4 Macbook St</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 py-4">
            {/* Date Picker */}
            <div className="grid gap-2">
              <Label htmlFor="date">Pickup Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Slot */}
            <div className="grid gap-2">
              <Label htmlFor="time">Preferred Time</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select time slot">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>Select time slot</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="on-demand" className="text-primary">On-Demand (Next Available Pickup)</SelectItem>
                  <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                  <SelectItem value="evening">Evening (4PM - 8PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Number of Items */}
            <div className="grid gap-2">
              <Label htmlFor="items">Number of Items</Label>
              <Input
                id="items"
                type="number"
                min="1"
                placeholder="Enter number of items"
                className="col-span-3"
              />
            </div>

            {/* Special Instructions */}
            <div className="grid gap-2">
              <Label htmlFor="instructions">Special Instructions</Label>
              <Textarea
                id="instructions"
                placeholder="Any special handling instructions..."
                className="col-span-3"
              />
            </div>
          </div>
        </div>

        <DialogFooter className="p-6 pt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-glow transition-all"
            onClick={() => onOpenChange(false)}
          >
            Schedule Pickup
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 