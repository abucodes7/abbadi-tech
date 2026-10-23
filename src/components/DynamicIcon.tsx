import React from 'react';
import { icons } from 'lucide-react';

export type IconName = keyof typeof icons | string;

export interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  className?: string;
}

// Comprehensive dictionary mapping semantic aliases and emojis to Lucide icons
const ICON_NAME_MAP: Record<string, string> = {
  // Emojis mapping
  '⚡': 'Zap',
  '💧': 'Droplets',
  '❄️': 'Snowflake',
  '❄': 'Snowflake',
  '🏢': 'Building2',
  '🛠️': 'Wrench',
  '🛠': 'Wrench',
  '🛍️': 'ShoppingBag',
  '🛍': 'ShoppingBag',
  '🍽️': 'UtensilsCrossed',
  '🍽': 'UtensilsCrossed',
  '🏨': 'Hotel',
  '🏡': 'Home',
  '🏭': 'Factory',
  '☎️': 'Phone',
  '☎': 'Phone',
  '📱': 'Smartphone',
  '📞': 'PhoneCall',
  '💬': 'MessageSquare',
  '📸': 'Camera',
  '🏆': 'Trophy',
  '📍': 'MapPin',
  '⏱️': 'Clock',
  '⏱': 'Clock',
  '🕒': 'Clock',
  '🛡️': 'ShieldCheck',
  '🛡': 'ShieldCheck',
  '🤝': 'Handshake',
  '✔': 'CheckCircle2',
  '✓': 'Check',
  '📅': 'Calendar',
  '👷': 'HardHat',
  '🔍': 'SearchCheck',
  '🔎': 'Search',
  '🏛️': 'Landmark',
  '🏛': 'Landmark',

  // Semantic mappings
  'electrical': 'Zap',
  'plumbing': 'Droplets',
  'hvac': 'Snowflake',
  'fitout': 'Building2',
  'fit-out': 'Building2',
  'maintenance': 'Wrench',
  'retail': 'ShoppingBag',
  'restaurant': 'UtensilsCrossed',
  'dining': 'UtensilsCrossed',
  'office': 'Building2',
  'hospitality': 'Hotel',
  'villa': 'Home',
  'warehouse': 'Factory',
  'industrial': 'Factory',
  'whatsapp': 'MessageSquare',
  'phone': 'Phone',
  'mobile': 'Smartphone',
  'location': 'MapPin',
  'shield': 'ShieldCheck',
  'time': 'Clock',
  'clock': 'Clock',
  'check': 'CheckCircle2',
  'verified': 'CheckCircle2',
  'award': 'Trophy',
  'camera': 'Camera',
  'calendar': 'Calendar',
  'engineer': 'HardHat',
  'search': 'SearchCheck',
  'government': 'Landmark',
  'dewa': 'Zap',
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  className = '',
  style,
  ...props
}) => {
  if (!name) return null;

  const rawName = String(name).trim();

  // 1. Check direct alias mapping
  let resolvedName = ICON_NAME_MAP[rawName] || rawName;

  // 2. Convert kebab-case or space-separated to PascalCase
  if (resolvedName.includes('-') || resolvedName.includes(' ')) {
    resolvedName = resolvedName
      .split(/[- ]+/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join('');
  } else if (/^[a-z]/.test(resolvedName)) {
    // lowercase to PascalCase (e.g. "zap" -> "Zap")
    resolvedName = resolvedName.charAt(0).toUpperCase() + resolvedName.slice(1);
  }

  // 3. Resolve from Lucide icons map
  const IconComponent =
    (icons as Record<string, React.ComponentType<any>>)[resolvedName] ||
    (icons as Record<string, React.ComponentType<any>>)[resolvedName + '2'] ||
    icons.HelpCircle;

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={`lucide-dynamic-icon ${className}`.trim()}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
      {...props}
    />
  );
};

export default DynamicIcon;
