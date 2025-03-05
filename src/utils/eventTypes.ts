
import { Flower, Trees, UtensilsCrossed } from 'lucide-react';

export const EVENT_TYPES = {
  HIKE: 'Silent Hike',
  MEDITATION: 'Group Meditation',
  LUNCH: 'Silent Lunch'
} as const;

export type EventType = typeof EVENT_TYPES[keyof typeof EVENT_TYPES];

export const getEventTypeIcon = (type: EventType) => {
  switch (type) {
    case EVENT_TYPES.HIKE:
      return Trees;
    case EVENT_TYPES.MEDITATION:
      return Flower;
    case EVENT_TYPES.LUNCH:
      return UtensilsCrossed;
    default:
      return Trees;
  }
};
