import PropTypes from 'prop-types';
import s from './Section.module.css';

export const Section = ({ title, children }) => (
  <>
    <h2 className={s.Title}>{title}</h2>
    {children}
  </>
);

Section.propTipes = {
  title: PropTypes.string.isRequired,
};
