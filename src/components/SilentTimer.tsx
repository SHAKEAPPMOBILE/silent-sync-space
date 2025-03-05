
import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const SilentTimer = () => {
  const [duration, setDuration] = useState(300); // 5 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive, setIsActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  const progressPercentage = (timeLeft / duration) * 100;
  
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setIsActive(false);
            setIsComplete(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, timeLeft]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsComplete(false);
  };
  
  const handlePause = () => {
    setIsActive(false);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(duration);
    setIsComplete(false);
  };
  
  const handleDurationChange = (newDuration: number) => {
    setDuration(newDuration);
    setTimeLeft(newDuration);
    setIsActive(false);
    setIsComplete(false);
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-medium mb-1">Silent Meditation Timer</h3>
          <p className="text-sm text-muted-foreground">
            Focus on your breath and be present
          </p>
        </div>
        
        <div className="relative w-64 h-64 mx-auto mb-6">
          {/* Progress Circle */}
          <svg className="absolute inset-0 transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="#f1f5f9" 
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="282.7"
              strokeDashoffset={282.7 - (282.7 * progressPercentage) / 100}
              className="text-nature-500 transition-all duration-500"
            />
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-medium">{formatTime(timeLeft)}</span>
            <span className="text-sm text-muted-foreground mt-1">
              {isComplete ? "Complete" : isActive ? "Breathe..." : "Ready"}
            </span>
          </div>
          
          {/* Ripple animation when active */}
          {isActive && (
            <div className="absolute inset-0 animate-ripple border-2 border-nature-500 rounded-full"></div>
          )}
        </div>
        
        <div className="flex justify-center gap-3 mb-6">
          <Button
            variant="outline"
            className={`rounded-full h-9 px-4 text-xs ${duration === 60 ? 'bg-muted' : ''}`}
            onClick={() => handleDurationChange(60)}
          >
            1 min
          </Button>
          <Button
            variant="outline"
            className={`rounded-full h-9 px-4 text-xs ${duration === 300 ? 'bg-muted' : ''}`}
            onClick={() => handleDurationChange(300)}
          >
            5 min
          </Button>
          <Button
            variant="outline"
            className={`rounded-full h-9 px-4 text-xs ${duration === 600 ? 'bg-muted' : ''}`}
            onClick={() => handleDurationChange(600)}
          >
            10 min
          </Button>
          <Button
            variant="outline"
            className={`rounded-full h-9 px-4 text-xs ${duration === 1200 ? 'bg-muted' : ''}`}
            onClick={() => handleDurationChange(1200)}
          >
            20 min
          </Button>
        </div>
        
        <div className="flex justify-center gap-3">
          {!isActive ? (
            <Button 
              className="bg-nature-500 hover:bg-nature-600 rounded-full h-12 w-12 p-0"
              onClick={handleStart}
              disabled={isComplete && timeLeft === 0}
            >
              <Play size={18} />
            </Button>
          ) : (
            <Button 
              className="bg-silence-600 hover:bg-silence-700 rounded-full h-12 w-12 p-0"
              onClick={handlePause}
            >
              <Pause size={18} />
            </Button>
          )}
          <Button 
            variant="outline" 
            className="rounded-full h-12 w-12 p-0"
            onClick={handleReset}
          >
            <RotateCcw size={18} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
