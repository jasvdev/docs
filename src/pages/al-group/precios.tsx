import type { ReactNode } from 'react';

import styles from './precios.module.css';
import clsx from 'clsx';

export default function Home(): ReactNode {
  const pricingList = [
    {
      title: 'Estrella Naciente',
      permanence: '1-3',
      pricePerHour: '$3.750',
      pricePerFortnight: '$395.000',
      className: styles['estrellaNaciente'],
    },
    {
      title: 'Sensación Virtual',
      permanence: '4-6',
      pricePerHour: '$4.750',
      pricePerFortnight: '$500.000',
      className: styles['sensacionVirtual'],
    },
    {
      title: 'Diva Virtual',
      permanence: '6-12',
      pricePerHour: '$6.000',
      pricePerFortnight: '$630.000',
      className: styles['divaVirtual'],
    },
    {
      title: 'Diosa del Show',
      permanence: '+12',
      pricePerHour: '$7.250',
      pricePerFortnight: '$765.000',
      className: styles['diosaShow'],
    },
  ];

  const horarios = [
    {
      shift: 'Mañana',
      start: '6 AM',
      end: '2 PM',
    },
    {
      shift: 'Tarde',
      start: '2 PM',
      end: '10 PM',
    },
    {
      shift: 'Noche',
      start: '10 PM',
      end: '6 AM',
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.pricingContainer}>
        {pricingList.map((packageInfo) => (
          <div key={packageInfo.title} className={clsx(styles.package, packageInfo.className)}>
            <div className={styles.packageTitle}>{packageInfo.title}</div>
            <div className={styles.pricingTable}>
              <div className={styles.singleRow}>
                <div className={styles.priceGroup}>
                  <div className={styles.priceItem}>
                    <div className={styles.priceLabel}>PERMANENCIA MESES</div>
                    <div className={styles.priceValue}>{packageInfo.permanence}</div>
                  </div>
                  <div className={styles.priceItem}>
                    <div className={styles.priceLabel}>PRECIO HORA</div>
                    <div className={styles.priceValue}>{packageInfo.pricePerHour}</div>
                  </div>
                  <div className={styles.priceItem}>
                    <div className={styles.priceLabel}>PRECIO QUINCENA</div>
                    <div className={styles.priceValue}>{packageInfo.pricePerFortnight}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className={clsx(styles.package, styles['estrellaNaciente'])}>
          <div className={styles.packageTitle}>Horarios</div>
          <div className={styles.pricingTable}>
            {horarios.map((horario) => (
              <div key={horario.shift} className={styles.singleRow}>
                <div className={styles.priceGroup}>
                  <div className={styles.priceItem}>
                    <div className={styles.priceLabel}>TURNO</div>
                    <div className={styles.priceValue}>{horario.shift}</div>
                  </div>
                  <div className={styles.priceItem}>
                    <div className={styles.priceLabel}>INICIO</div>
                    <div className={styles.priceValue}>{horario.start}</div>
                  </div>
                  <div className={styles.priceItem}>
                    <div className={styles.priceLabel}>FIN</div>
                    <div className={styles.priceValue}>{horario.end}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.priceLabel}>
              <b>Nota: </b>El turno nocturno tiene un descuento del 30%
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
