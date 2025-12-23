import { FC } from "react";

interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  icon: React.ReactNode;
}

const events: Event[] = [
  {
    id: "haldi",
    name: "Haldi",
    date: "March 15, 2025",
    time: "10:00 AM",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <circle cx="20" cy="20" r="15" fill="hsl(43, 90%, 55%)" />
        <circle cx="20" cy="20" r="10" fill="hsl(43, 85%, 65%)" />
        <circle cx="20" cy="20" r="5" fill="hsl(43, 90%, 50%)" />
      </svg>
    ),
  },
  {
    id: "sangeet",
    name: "Sangeet",
    date: "March 16, 2025",
    time: "7:00 PM",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path
          d="M 20 5 L 20 30 M 20 30 Q 15 30 12 33 Q 10 36 12 38 Q 15 40 20 38 Q 25 36 25 32 Q 25 30 20 30"
          stroke="hsl(43, 70%, 50%)"
          strokeWidth="3"
          fill="hsl(43, 70%, 50%)"
        />
        <circle cx="20" cy="10" r="3" fill="hsl(43, 80%, 60%)" />
      </svg>
    ),
  },
  {
    id: "anand-karaj",
    name: "Anand Karaj",
    date: "March 17, 2025",
    time: "9:00 AM",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path
          d="M 20 8 L 22 14 L 28 14 L 23 18 L 25 24 L 20 20 L 15 24 L 17 18 L 12 14 L 18 14 Z"
          fill="hsl(43, 70%, 50%)"
        />
        <circle cx="20" cy="30" r="6" stroke="hsl(43, 70%, 50%)" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    id: "reception",
    name: "Reception",
    date: "March 17, 2025",
    time: "7:00 PM",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <path
          d="M 10 35 L 15 15 L 20 20 L 25 15 L 30 35"
          stroke="hsl(43, 70%, 50%)"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="20" cy="10" r="5" fill="hsl(43, 70%, 50%)" />
        <path d="M 15 35 L 25 35" stroke="hsl(43, 70%, 50%)" strokeWidth="3" />
      </svg>
    ),
  },
];

interface EventTimelineProps {
  onEventClick?: (eventId: string) => void;
}

export const EventTimeline: FC<EventTimelineProps> = ({ onEventClick }) => {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Timeline */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connection line */}
          <div
            className="absolute top-8 left-0 right-0 h-1 z-0"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(43 70% 50% / 0.5), hsl(43 70% 50% / 0.8), hsl(43 70% 50% / 0.5), transparent)",
            }}
          />

          {events.map((event, index) => (
            <div
              key={event.id}
              className="flex flex-col items-center z-10 cursor-pointer group"
              onClick={() => onEventClick?.(event.id)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon container */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, hsl(30 40% 88%), hsl(35 35% 82%))",
                  boxShadow: "0 4px 20px hsl(43 70% 50% / 0.3), inset 0 0 20px hsl(43 70% 50% / 0.1)",
                  border: "3px solid hsl(43 70% 50%)",
                }}
              >
                {event.icon}
              </div>

              {/* Event details */}
              <div
                className="text-center px-4 py-3 rounded-lg transition-all duration-300 group-hover:shadow-gold"
                style={{
                  background: "linear-gradient(180deg, hsl(30 40% 90% / 0.9), hsl(35 35% 85% / 0.9))",
                  border: "1px solid hsl(43 60% 70% / 0.5)",
                }}
              >
                <h3 className="text-lg font-display font-semibold text-foreground tracking-wide">
                  {event.name}
                </h3>
                <p className="text-sm font-body text-muted-foreground mt-1">{event.date}</p>
                <p className="text-sm font-body text-gold-dark font-medium">{event.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden flex flex-col space-y-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => onEventClick?.(event.id)}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, hsl(30 40% 88%), hsl(35 35% 82%))",
                  boxShadow: "0 4px 15px hsl(43 70% 50% / 0.3)",
                  border: "2px solid hsl(43 70% 50%)",
                }}
              >
                {event.icon}
              </div>

              {/* Details */}
              <div
                className="flex-1 px-4 py-3 rounded-lg"
                style={{
                  background: "linear-gradient(90deg, hsl(30 40% 90% / 0.9), hsl(35 35% 85% / 0.7))",
                  border: "1px solid hsl(43 60% 70% / 0.4)",
                }}
              >
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {event.name}
                </h3>
                <div className="flex gap-4 mt-1">
                  <p className="text-sm font-body text-muted-foreground">{event.date}</p>
                  <p className="text-sm font-body text-gold-dark font-medium">{event.time}</p>
                </div>
              </div>

              {/* Connector line (except last) */}
              {index < events.length - 1 && (
                <div
                  className="absolute left-7 top-14 w-0.5 h-6 -z-10"
                  style={{ background: "hsl(43 70% 50% / 0.4)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
