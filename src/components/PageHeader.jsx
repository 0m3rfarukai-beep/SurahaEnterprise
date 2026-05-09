import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const PageHeader = ({ eyebrow, title, description, icon: Icon, children, align = 'center' }) => {
  const isCenter = align === 'center';

  return (
    <section className="page-header">
      <div className="page-header__glow page-header__glow--blue" />
      <div className="page-header__glow page-header__glow--cyan" />
      <div className={`page-header__inner ${isCenter ? 'text-center' : 'text-left'}`}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          {eyebrow && (
            <div className={`page-kicker ${isCenter ? 'mx-auto' : ''}`}>
              {Icon && <Icon size={15} aria-hidden="true" />}
              <span>{eyebrow}</span>
            </div>
          )}
          <h1 className={`page-title ${isCenter ? 'mx-auto' : ''}`}>{title}</h1>
          {description && (
            <p className={`page-subtitle ${isCenter ? 'mx-auto' : ''}`}>
              {description}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
