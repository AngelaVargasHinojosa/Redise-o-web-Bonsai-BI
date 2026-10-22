/* @ds-bundle: {"format":4,"namespace":"BonsaiBIDesignSystem_088a82","components":[{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"CaseStudyCard","sourcePath":"components/content/CaseStudyCard.jsx"},{"name":"SectorTag","sourcePath":"components/content/SectorTag.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"CalloutBanner","sourcePath":"components/layout/CalloutBanner.jsx"},{"name":"FeatureBlock","sourcePath":"components/layout/FeatureBlock.jsx"},{"name":"ProcessFlow","sourcePath":"components/layout/ProcessFlow.jsx"},{"name":"Timeline","sourcePath":"components/layout/Timeline.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/content/Card.jsx":"46459d9436dd","components/content/CaseStudyCard.jsx":"abb7cd60c544","components/content/SectorTag.jsx":"571e302995dc","components/content/StatBlock.jsx":"f13fc736923e","components/content/TestimonialCard.jsx":"da7aad6f467e","components/core/Badge.jsx":"58c760d7f06b","components/core/Button.jsx":"8ae22819e840","components/core/Icon.jsx":"b48ad53496e2","components/layout/CalloutBanner.jsx":"793c65a91361","components/layout/FeatureBlock.jsx":"a9d7f6c92cc2","components/layout/ProcessFlow.jsx":"ca9277540333","components/layout/Timeline.jsx":"73d761cdede3","components/navigation/NavBar.jsx":"24e3e5e52978","image-slot.js":"9309434cb09c","ui_kits/website/image-slot.js":"9309434cb09c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BonsaiBIDesignSystem_088a82 = window.BonsaiBIDesignSystem_088a82 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Card.jsx
try { (() => {
function Card({
  children,
  variant = 'default',
  padding = 'md',
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = typeof onClick === 'function';
  const variants = {
    default: {
      background: '#FFFFFF',
      border: '1px solid #E8E6E1',
      boxShadow: hover && clickable ? '0 8px 24px rgba(40,41,56,.12)' : '0 4px 16px rgba(40,41,56,.08)'
    },
    bordered: {
      background: '#FFFFFF',
      border: '1.5px solid ' + (hover && clickable ? '#16A085' : '#E8E6E1'),
      boxShadow: 'none'
    },
    elevated: {
      background: '#FFFFFF',
      border: 'none',
      boxShadow: hover && clickable ? '0 16px 40px rgba(40,41,56,.14)' : '0 8px 24px rgba(40,41,56,.10)'
    },
    flat: {
      background: '#FFFFFF',
      border: '1px solid #E8E6E1',
      boxShadow: 'none'
    },
    brand: {
      background: '#EDF8F5',
      border: '1px solid #D2EFE9',
      boxShadow: 'none'
    },
    dark: {
      background: '#282938',
      border: 'none',
      boxShadow: 'none',
      color: '#F8F7F5'
    }
  };
  const padMap = {
    none: 0,
    sm: '16px',
    md: '24px',
    lg: '32px'
  };
  return React.createElement('div', {
    style: {
      borderRadius: '12px',
      padding: padMap[padding],
      transition: 'all 200ms cubic-bezier(.16,1,.3,1)',
      cursor: clickable ? 'pointer' : undefined,
      transform: hover && clickable ? 'translateY(-2px)' : 'translateY(0)',
      ...variants[variant]
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick,
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/CaseStudyCard.jsx
try { (() => {
function CaseStudyCard({
  title,
  sector,
  metric,
  metricLabel,
  description,
  tags = [],
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    style: {
      background: '#FFFFFF',
      border: '1px solid ' + (hover ? '#16A085' : '#E8E6E1'),
      borderRadius: '12px',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      transition: 'all 200ms cubic-bezier(.16,1,.3,1)',
      cursor: onClick ? 'pointer' : undefined,
      transform: hover && onClick ? 'translateY(-2px)' : 'none',
      boxShadow: hover ? '0 8px 24px rgba(40,41,56,.12)' : '0 4px 16px rgba(40,41,56,.06)'
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick,
    ...rest
  }, sector && React.createElement('div', {
    style: {
      fontFamily: "'Josefin Sans', sans-serif",
      fontSize: '11px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#16A085'
    }
  }, sector), React.createElement('h3', {
    style: {
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 800,
      fontSize: '20px',
      color: '#282938',
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
      margin: 0
    }
  }, title), metric && React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 900,
      fontSize: '44px',
      color: '#16A085',
      letterSpacing: '-0.03em',
      lineHeight: 1
    }
  }, metric), metricLabel && React.createElement('span', {
    style: {
      fontFamily: "'Josefin Sans', sans-serif",
      fontSize: '13px',
      color: '#7A7A7A',
      letterSpacing: '0.04em'
    }
  }, metricLabel)), description && React.createElement('p', {
    style: {
      fontFamily: "'Comfortaa', sans-serif",
      fontSize: '14px',
      color: '#7A7A7A',
      lineHeight: 1.65,
      margin: 0
    }
  }, description), tags.length > 0 && React.createElement('div', {
    style: {
      display: 'flex',
      gap: '6px',
      flexWrap: 'wrap',
      marginTop: '4px'
    }
  }, ...tags.map(tag => React.createElement('span', {
    key: tag,
    style: {
      fontFamily: "'Josefin Sans', sans-serif",
      fontSize: '10px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '3px 10px',
      borderRadius: '9999px',
      background: '#EDF8F5',
      color: '#16A085'
    }
  }, tag))));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SectorTag.jsx
try { (() => {
function SectorTag({
  sector,
  icon,
  variant = 'default',
  ...rest
}) {
  const variants = {
    default: {
      background: '#EDF8F5',
      color: '#16A085'
    },
    outline: {
      background: 'transparent',
      color: '#16A085',
      border: '1px solid #D2EFE9'
    },
    dark: {
      background: '#282938',
      color: '#F8F7F5'
    },
    neutral: {
      background: '#F8F7F5',
      color: '#7A7A7A'
    }
  };
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: "'Josefin Sans', sans-serif",
      fontSize: '11px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: '4px',
      ...variants[variant]
    },
    ...rest
  }, icon && React.createElement('img', {
    src: icon,
    width: 14,
    height: 14,
    alt: ''
  }), sector);
}
Object.assign(__ds_scope, { SectorTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectorTag.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  description,
  trend,
  compact = false,
  ...rest
}) {
  const trendArrow = {
    up: '↑',
    down: '↓',
    neutral: ''
  }[trend] || '';
  const trendColor = {
    up: '#16A085',
    down: '#C0392B',
    neutral: '#7A7A7A'
  }[trend] || '#7A7A7A';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      ...rest.style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '6px'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 900,
      fontSize: compact ? '32px' : '52px',
      color: '#16A085',
      letterSpacing: '-0.03em',
      lineHeight: 1
    }
  }, value), trend && React.createElement('span', {
    style: {
      fontSize: compact ? '16px' : '22px',
      color: trendColor,
      fontWeight: 700
    }
  }, trendArrow)), React.createElement('div', {
    style: {
      fontFamily: "'Josefin Sans', sans-serif",
      fontSize: '11px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#7A7A7A',
      marginTop: '4px'
    }
  }, label), description && React.createElement('div', {
    style: {
      fontFamily: "'Comfortaa', sans-serif",
      fontSize: '13px',
      color: '#7A7A7A',
      marginTop: '4px',
      lineHeight: 1.5
    }
  }, description));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  author,
  role,
  company,
  sector,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      background: '#FFFFFF',
      border: '1px solid #E8E6E1',
      borderRadius: '12px',
      padding: '28px',
      boxShadow: '0 4px 16px rgba(40,41,56,.08)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    ...rest
  }, React.createElement('div', {
    style: {
      fontSize: '40px',
      color: '#16A085',
      fontFamily: 'Georgia,serif',
      lineHeight: 1,
      marginBottom: '-4px'
    }
  }, '“'), React.createElement('p', {
    style: {
      fontFamily: "'Comfortaa', sans-serif",
      fontSize: '15px',
      color: '#282938',
      lineHeight: 1.7,
      fontStyle: 'italic'
    }
  }, quote), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginTop: '4px'
    }
  }, React.createElement('div', {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: '#EDF8F5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 900,
      fontSize: '16px',
      color: '#16A085',
      flexShrink: 0
    }
  }, author ? author[0].toUpperCase() : '?'), React.createElement('div', {}, React.createElement('div', {
    style: {
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 700,
      fontSize: '14px',
      color: '#282938',
      letterSpacing: '-.01em'
    }
  }, author), React.createElement('div', {
    style: {
      fontFamily: "'Josefin Sans', sans-serif",
      fontSize: '11px',
      color: '#7A7A7A',
      letterSpacing: '0.04em',
      marginTop: '1px'
    }
  }, [role, company].filter(Boolean).join(' · '))), sector && React.createElement('div', {
    style: {
      marginLeft: 'auto',
      fontFamily: "'League Spartan', sans-serif",
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '3px 10px',
      borderRadius: '9999px',
      background: '#EDF8F5',
      color: '#16A085'
    }
  }, sector)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  variant = 'brand',
  size = 'sm',
  dot = false,
  ...rest
}) {
  const variants = {
    brand: {
      background: '#EDF8F5',
      color: '#16A085'
    },
    neutral: {
      background: '#F8F7F5',
      color: '#7A7A7A',
      border: '1px solid #E8E6E1'
    },
    outline: {
      background: 'transparent',
      color: '#16A085',
      border: '1.5px solid #16A085'
    },
    dark: {
      background: '#282938',
      color: '#F8F7F5'
    },
    verde: {
      background: '#16A085',
      color: '#FFFFFF'
    }
  };
  const sizes = {
    sm: {
      fontSize: '10px',
      padding: dot ? '3px 8px 3px 6px' : '3px 10px'
    },
    md: {
      fontSize: '12px',
      padding: dot ? '5px 12px 5px 9px' : '5px 14px'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      borderRadius: '9999px',
      boxSizing: 'border-box',
      ...sizes[size],
      ...variants[variant]
    },
    ...rest
  }, dot && React.createElement('span', {
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: 'currentColor',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  href,
  onClick,
  type = 'button',
  icon,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizeMap = {
    sm: {
      padding: '8px 18px',
      fontSize: '11px',
      borderRadius: '4px',
      gap: '6px'
    },
    md: {
      padding: '12px 26px',
      fontSize: '13px',
      borderRadius: '6px',
      gap: '8px'
    },
    lg: {
      padding: '15px 36px',
      fontSize: '14px',
      borderRadius: '7px',
      gap: '10px'
    }
  };
  const variantMap = {
    primary: {
      background: hover ? '#0E8068' : '#16A085',
      color: '#FFFFFF',
      border: 'none',
      boxShadow: hover ? '0 4px 20px rgba(22,160,133,.35)' : '0 4px 16px rgba(22,160,133,.2)'
    },
    secondary: {
      background: hover ? '#F0EFEB' : '#FFFFFF',
      color: '#282938',
      border: '1.5px solid #E8E6E1',
      boxShadow: 'none'
    },
    ghost: {
      background: hover ? '#EDF8F5' : 'transparent',
      color: '#16A085',
      border: 'none',
      boxShadow: 'none'
    },
    outline: {
      background: hover ? '#EDF8F5' : 'transparent',
      color: '#16A085',
      border: '1.5px solid #16A085',
      boxShadow: 'none'
    },
    dark: {
      background: hover ? '#383950' : '#282938',
      color: '#F8F7F5',
      border: 'none',
      boxShadow: 'none'
    }
  };
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'League Spartan', sans-serif",
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: 'all 200ms cubic-bezier(.16,1,.3,1)',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.45 : 1,
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    ...sizeMap[size],
    ...variantMap[variant]
  };
  const handlers = {
    onMouseEnter: () => !disabled && setHover(true),
    onMouseLeave: () => setHover(false)
  };
  if (href && !disabled) return React.createElement('a', {
    href,
    style,
    ...handlers,
    ...rest
  }, icon, children);
  return React.createElement('button', {
    type,
    disabled,
    onClick: disabled ? undefined : onClick,
    style,
    ...handlers,
    ...rest
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 24,
  basePath,
  style: extra,
  alt,
  ...rest
}) {
  const base = basePath != null ? basePath : '../../assets/icons/';
  const iconAlt = alt || (name || '').split('/').pop().replace(/-/g, ' ');
  return React.createElement('img', {
    src: base + name + '.svg',
    width: size,
    height: size,
    alt: iconAlt,
    style: {
      display: 'inline-block',
      flexShrink: 0,
      ...extra
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/layout/CalloutBanner.jsx
try { (() => {
function CalloutBanner({
  eyebrow,
  title,
  description,
  cta,
  ctaSecondary,
  onCta,
  onCtaSecondary,
  variant = 'brand',
  // 'brand' | 'dark' | 'light' | 'outline'
  align = 'center',
  // 'center' | 'left'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  ...rest
}) {
  const themes = {
    brand: {
      bg: '#16A085',
      text: '#FFFFFF',
      eyebrow: 'rgba(255,255,255,.7)',
      desc: 'rgba(255,255,255,.85)',
      border: 'none',
      btnBg: '#FFFFFF',
      btnColor: '#16A085',
      btnBorder: 'none',
      btnSecBg: 'transparent',
      btnSecColor: '#FFFFFF',
      btnSecBorder: '1.5px solid rgba(255,255,255,.5)'
    },
    dark: {
      bg: '#282938',
      text: '#F8F7F5',
      eyebrow: '#7A7A7A',
      desc: '#C5C2BB',
      border: 'none',
      btnBg: '#16A085',
      btnColor: '#FFFFFF',
      btnBorder: 'none',
      btnSecBg: 'transparent',
      btnSecColor: '#F8F7F5',
      btnSecBorder: '1.5px solid #383950'
    },
    light: {
      bg: '#FFFFFF',
      text: '#282938',
      eyebrow: '#16A085',
      desc: '#7A7A7A',
      border: '1px solid #E8E6E1',
      btnBg: '#16A085',
      btnColor: '#FFFFFF',
      btnBorder: 'none',
      btnSecBg: 'transparent',
      btnSecColor: '#282938',
      btnSecBorder: '1.5px solid #E8E6E1'
    },
    outline: {
      bg: '#EDF8F5',
      text: '#282938',
      eyebrow: '#16A085',
      desc: '#7A7A7A',
      border: '2px dashed #D2EFE9',
      btnBg: '#16A085',
      btnColor: '#FFFFFF',
      btnBorder: 'none',
      btnSecBg: 'transparent',
      btnSecColor: '#16A085',
      btnSecBorder: '1.5px solid #16A085'
    }
  };
  const t = themes[variant] || themes.brand;
  const pad = {
    sm: '32px 40px',
    md: '48px 56px',
    lg: '64px 72px'
  }[size] || '48px 56px';
  const titleSize = {
    sm: 22,
    md: 30,
    lg: 40
  }[size] || 30;
  const descSize = {
    sm: 13,
    md: 15,
    lg: 16
  }[size] || 15;
  function Btn({
    label,
    onClick,
    primary
  }) {
    const [hov, setHov] = React.useState(false);
    const bg = primary ? hov ? '#0E8068' : t.btnBg : hov ? 'rgba(255,255,255,.1)' : t.btnSecBg;
    const col = primary ? t.btnColor : t.btnSecColor;
    const brd = primary ? t.btnBorder : t.btnSecBorder;
    return React.createElement('button', {
      onClick,
      onMouseEnter: () => setHov(true),
      onMouseLeave: () => setHov(false),
      style: {
        background: bg,
        color: col,
        border: brd,
        borderRadius: '8px',
        padding: '10px 24px',
        fontFamily: "'League Spartan', sans-serif",
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: '0.02em',
        cursor: 'pointer',
        transition: 'all 150ms cubic-bezier(.16,1,.3,1)'
      }
    }, label);
  }
  return React.createElement('div', {
    style: {
      background: t.bg,
      border: t.border,
      borderRadius: '16px',
      padding: pad,
      textAlign: align,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: variant === 'brand' ? '0 8px 32px rgba(22,160,133,.25)' : variant === 'dark' ? '0 8px 32px rgba(0,0,0,.2)' : '0 4px 16px rgba(40,41,56,.08)',
      ...rest.style
    }
  }, eyebrow && React.createElement('div', {
    style: {
      fontFamily: "'Josefin Sans', sans-serif",
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: t.eyebrow,
      marginBottom: 10
    }
  }, eyebrow), React.createElement('div', {
    style: {
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 800,
      fontSize: titleSize,
      color: t.text,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      textWrap: 'pretty',
      maxWidth: align === 'center' ? 640 : undefined,
      margin: align === 'center' ? '0 auto' : undefined
    }
  }, title), description && React.createElement('div', {
    style: {
      fontFamily: "'Comfortaa', sans-serif",
      fontSize: descSize,
      color: t.desc,
      marginTop: 14,
      lineHeight: 1.65,
      maxWidth: align === 'center' ? 560 : 600,
      margin: `14px ${align === 'center' ? 'auto' : '0'} 0`
    }
  }, description), (cta || ctaSecondary) && React.createElement('div', {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, cta && React.createElement(Btn, {
    label: cta,
    onClick: onCta,
    primary: true
  }), ctaSecondary && React.createElement(Btn, {
    label: ctaSecondary,
    onClick: onCtaSecondary,
    primary: false
  })));
}
Object.assign(__ds_scope, { CalloutBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CalloutBanner.jsx", error: String((e && e.message) || e) }); }

// components/layout/FeatureBlock.jsx
try { (() => {
function FeatureBlock({
  icon,
  title,
  description,
  tag,
  variant = 'default',
  // 'default' | 'brand' | 'dark' | 'minimal' | 'bordered'
  layout = 'card',
  // 'card' | 'inline'
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const themes = {
    default: {
      bg: '#FFFFFF',
      border: '1px solid #E8E6E1',
      iconBg: '#EDF8F5',
      iconColor: '#16A085',
      title: '#282938',
      body: '#7A7A7A',
      tag: '#16A085'
    },
    brand: {
      bg: '#EDF8F5',
      border: '1px solid #D2EFE9',
      iconBg: '#16A085',
      iconColor: '#FFFFFF',
      title: '#282938',
      body: '#7A7A7A',
      tag: '#0E8068'
    },
    dark: {
      bg: '#282938',
      border: 'none',
      iconBg: '#383950',
      iconColor: '#16A085',
      title: '#F8F7F5',
      body: '#C5C2BB',
      tag: '#1EC99F'
    },
    minimal: {
      bg: 'transparent',
      border: 'none',
      iconBg: '#EDF8F5',
      iconColor: '#16A085',
      title: '#282938',
      body: '#7A7A7A',
      tag: '#16A085'
    },
    bordered: {
      bg: '#FFFFFF',
      border: `1.5px solid ${hover ? '#16A085' : '#E8E6E1'}`,
      iconBg: '#EDF8F5',
      iconColor: '#16A085',
      title: '#282938',
      body: '#7A7A7A',
      tag: '#16A085'
    }
  };
  const t = themes[variant] || themes.default;
  const isCard = layout === 'card';
  return React.createElement('div', {
    style: {
      background: t.bg,
      border: t.border,
      borderRadius: isCard ? '12px' : 0,
      padding: isCard ? '24px' : '0',
      display: 'flex',
      flexDirection: layout === 'inline' ? 'row' : 'column',
      gap: layout === 'inline' ? '16px' : '14px',
      alignItems: layout === 'inline' ? 'flex-start' : undefined,
      boxShadow: hover && isCard && variant !== 'minimal' ? '0 8px 24px rgba(40,41,56,.10)' : 'none',
      transform: hover && isCard ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'all 200ms cubic-bezier(.16,1,.3,1)',
      ...rest.style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /* Icon badge */
  icon && React.createElement('div', {
    style: {
      width: 48,
      height: 48,
      borderRadius: '10px',
      background: t.iconBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: 22
    }
  }, typeof icon === 'string' ? React.createElement('span', {
    style: {
      color: t.iconColor
    }
  }, icon) : icon), /* Text group */
  React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, tag && React.createElement('div', {
    style: {
      fontFamily: "'Josefin Sans', sans-serif",
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: t.tag
    }
  }, tag), React.createElement('div', {
    style: {
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 700,
      fontSize: 16,
      color: t.title,
      lineHeight: 1.25
    }
  }, title), description && React.createElement('div', {
    style: {
      fontFamily: "'Comfortaa', sans-serif",
      fontSize: 13,
      color: t.body,
      lineHeight: 1.6,
      textWrap: 'pretty'
    }
  }, description)));
}
Object.assign(__ds_scope, { FeatureBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FeatureBlock.jsx", error: String((e && e.message) || e) }); }

// components/layout/ProcessFlow.jsx
try { (() => {
function ProcessFlow({
  steps = [],
  orientation = 'horizontal',
  variant = 'numbered',
  // 'numbered' | 'dotted' | 'icon'
  accent = '#16A085',
  lineColor = '#C5C2BB',
  ...rest
}) {
  const n = steps.length;
  const F = React.Fragment;

  /* ── Circle node ── */
  function Node({
    step,
    index
  }) {
    const bg = step.active ? accent : step.done ? accent : '#FFFFFF';
    const border = step.active || step.done ? accent : lineColor;
    const color = step.active || step.done ? '#FFFFFF' : '#7A7A7A';
    const inner = variant === 'dotted' ? React.createElement('div', {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: step.active || step.done ? '#FFFFFF' : lineColor
      }
    }) : variant === 'icon' && step.icon ? React.createElement('span', {
      style: {
        fontSize: 16,
        lineHeight: 1
      }
    }, step.icon) : React.createElement('span', {
      style: {
        fontFamily: "'League Spartan', sans-serif",
        fontWeight: 800,
        fontSize: 14,
        color,
        lineHeight: 1
      }
    }, step.number || String(index + 1));
    const size = variant === 'dotted' ? 20 : 44;
    return React.createElement('div', {
      style: {
        width: size,
        height: size,
        borderRadius: '50%',
        background: bg,
        border: `2px solid ${border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        position: 'relative',
        zIndex: 1,
        transition: 'all 200ms cubic-bezier(.16,1,.3,1)',
        boxShadow: step.active || step.done ? `0 4px 16px ${accent}40` : 'none'
      }
    }, inner);
  }

  /* ── Dashed connector ── */
  function Dash({
    dir
  }) {
    return React.createElement('div', {
      style: dir === 'h' ? {
        flex: 1,
        height: 0,
        borderTop: `2px dashed ${lineColor}`,
        minWidth: 16
      } : {
        width: 0,
        flex: 1,
        minHeight: 16,
        borderLeft: `2px dashed ${lineColor}`,
        alignSelf: 'stretch',
        margin: '2px auto'
      }
    });
  }

  /* ── Step label ── */
  function Label({
    step,
    align = 'center'
  }) {
    return React.createElement('div', {
      style: {
        textAlign: align
      }
    }, step.tag && React.createElement('div', {
      style: {
        fontFamily: "'Josefin Sans', sans-serif",
        fontSize: 10,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: accent,
        marginBottom: 4
      }
    }, step.tag), React.createElement('div', {
      style: {
        fontFamily: "'League Spartan', sans-serif",
        fontWeight: 700,
        fontSize: 14,
        color: '#282938',
        lineHeight: 1.25
      }
    }, step.title), step.description && React.createElement('div', {
      style: {
        fontFamily: "'Comfortaa', sans-serif",
        fontSize: 12,
        color: '#7A7A7A',
        marginTop: 4,
        lineHeight: 1.55,
        textWrap: 'pretty'
      }
    }, step.description));
  }

  /* ════════════ HORIZONTAL ════════════ */
  if (orientation === 'horizontal') {
    return React.createElement('div', {
      style: {
        width: '100%',
        ...rest.style
      }
    }, /* Row 1: circles + lines */
    React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
      }
    }, ...steps.flatMap((step, i) => {
      const items = [React.createElement('div', {
        key: 'step-' + i,
        style: {
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }
      }, React.createElement(Node, {
        step,
        index: i
      }))];
      if (i < n - 1) items.push(React.createElement(Dash, {
        key: 'dash-' + i,
        dir: 'h'
      }));
      return items;
    })), /* Row 2: labels */
    React.createElement('div', {
      style: {
        display: 'flex',
        width: '100%',
        marginTop: 12
      }
    }, ...steps.flatMap((step, i) => {
      const items = [React.createElement('div', {
        key: 'lbl-' + i,
        style: {
          flex: 1,
          padding: '0 8px'
        }
      }, React.createElement(Label, {
        step
      }))];
      if (i < n - 1) items.push(React.createElement('div', {
        key: 'sp-' + i,
        style: {
          flex: 0,
          minWidth: 16
        }
      }));
      return items;
    })));
  }

  /* ════════════ VERTICAL ════════════ */
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      ...rest.style
    }
  }, ...steps.map((step, i) => {
    const isLast = i === n - 1;
    return React.createElement('div', {
      key: i,
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start'
      }
    }, /* Left rail */
    React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
        width: 44
      }
    }, React.createElement(Node, {
      step,
      index: i
    }), !isLast && React.createElement(Dash, {
      dir: 'v'
    })), /* Content */
    React.createElement('div', {
      style: {
        paddingTop: 8,
        paddingBottom: isLast ? 0 : 24,
        flex: 1
      }
    }, React.createElement(Label, {
      step,
      align: 'left'
    })));
  }));
}
Object.assign(__ds_scope, { ProcessFlow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ProcessFlow.jsx", error: String((e && e.message) || e) }); }

// components/layout/Timeline.jsx
try { (() => {
function Timeline({
  items = [],
  variant = 'default',
  // 'default' | 'compact' | 'numbered'
  accent = '#16A085',
  lineColor = '#E8E6E1',
  ...rest
}) {
  const n = items.length;
  function Dot({
    item,
    index
  }) {
    const isNumbered = variant === 'numbered';
    const size = isNumbered ? 32 : 12;
    const bg = item.active ? accent : item.done ? accent : isNumbered ? '#FFFFFF' : lineColor;
    const border = item.active || item.done ? accent : isNumbered ? lineColor : 'none';
    return React.createElement('div', {
      style: {
        width: size,
        height: size,
        borderRadius: '50%',
        background: bg,
        border: `2px solid ${border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        zIndex: 1,
        position: 'relative',
        boxShadow: item.active ? `0 0 0 4px ${accent}20` : 'none',
        transition: 'all 200ms cubic-bezier(.16,1,.3,1)'
      }
    }, isNumbered && React.createElement('span', {
      style: {
        fontFamily: "'League Spartan', sans-serif",
        fontWeight: 800,
        fontSize: 12,
        color: item.active || item.done ? '#FFFFFF' : '#7A7A7A',
        lineHeight: 1
      }
    }, String(index + 1)));
  }
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...rest.style
    }
  }, ...items.map((item, i) => {
    const isLast = i === n - 1;
    const isCompact = variant === 'compact';
    return React.createElement('div', {
      key: i,
      style: {
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start'
      }
    }, /* Left rail: dot + line */
    React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
        width: variant === 'numbered' ? 32 : 12
      }
    }, React.createElement(Dot, {
      item,
      index: i
    }), !isLast && React.createElement('div', {
      style: {
        flex: 1,
        width: 0,
        minHeight: isCompact ? 16 : 24,
        borderLeft: `2px dashed ${item.active ? accent + '60' : lineColor}`,
        margin: '3px auto 0'
      }
    })), /* Content */
    React.createElement('div', {
      style: {
        paddingBottom: isLast ? 0 : isCompact ? 16 : 24,
        paddingTop: 0,
        flex: 1,
        marginTop: variant === 'numbered' ? -1 : -4
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 10,
        flexWrap: 'wrap',
        marginBottom: 4
      }
    }, item.date && React.createElement('span', {
      style: {
        fontFamily: "'Josefin Sans', sans-serif",
        fontSize: 11,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: item.active ? accent : '#7A7A7A',
        flexShrink: 0
      }
    }, item.date), item.tag && React.createElement('span', {
      style: {
        fontFamily: "'League Spartan', sans-serif",
        fontWeight: 700,
        fontSize: 10,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        background: item.active ? accent : '#C5C2BB',
        borderRadius: '4px',
        padding: '2px 7px'
      }
    }, item.tag)), React.createElement('div', {
      style: {
        fontFamily: "'League Spartan', sans-serif",
        fontWeight: 700,
        fontSize: isCompact ? 14 : 15,
        color: item.active ? '#282938' : '#282938',
        lineHeight: 1.25
      }
    }, item.title), !isCompact && item.description && React.createElement('div', {
      style: {
        fontFamily: "'Comfortaa', sans-serif",
        fontSize: 13,
        color: '#7A7A7A',
        marginTop: 5,
        lineHeight: 1.6,
        textWrap: 'pretty'
      }
    }, item.description)));
  }));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  links = [],
  ctaLabel = 'Contactar',
  ctaHref = '/contacto',
  transparent = false,
  ...rest
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [hoverLink, setHoverLink] = React.useState(null);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  const bg = transparent && !scrolled ? 'transparent' : 'rgba(248,247,245,0.96)';
  return React.createElement('nav', {
    style: {
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: bg,
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid #E8E6E1' : '1px solid transparent',
      transition: 'all 250ms cubic-bezier(.16,1,.3,1)',
      padding: '0 32px'
    },
    ...rest
  }, React.createElement('div', {
    style: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      height: '68px'
    }
  }, React.createElement('a', {
    href: '/',
    style: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      marginRight: 'auto'
    }
  }, React.createElement('img', {
    src: '../../assets/logos/logo-dark.png',
    height: 36,
    alt: 'Bonsai BI'
  })), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }
  }, ...links.map((link, i) => React.createElement('a', {
    key: i,
    href: link.href,
    style: {
      fontFamily: "'Josefin Sans', sans-serif",
      fontSize: '12px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: hoverLink === i ? '#16A085' : '#282938',
      textDecoration: 'none',
      transition: 'color 150ms ease'
    },
    onMouseEnter: () => setHoverLink(i),
    onMouseLeave: () => setHoverLink(null)
  }, link.label)), ctaLabel && React.createElement('a', {
    href: ctaHref,
    style: {
      fontFamily: "'League Spartan', sans-serif",
      fontWeight: 700,
      fontSize: '12px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '9px 22px',
      borderRadius: '5px',
      background: '#16A085',
      color: '#FFFFFF',
      textDecoration: 'none',
      transition: 'background 180ms ease',
      boxShadow: '0 4px 16px rgba(22,160,133,.2)'
    }
  }, ctaLabel))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.SectorTag = __ds_scope.SectorTag;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.CalloutBanner = __ds_scope.CalloutBanner;

__ds_ns.FeatureBlock = __ds_scope.FeatureBlock;

__ds_ns.ProcessFlow = __ds_scope.ProcessFlow;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
