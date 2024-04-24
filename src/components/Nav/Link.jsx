import sum from "../../helpers/sum";
import styles from "./Nav.module.css";
import PropTypes from "prop-types";

/**
 *
 * @param {string} title
 * This is the title will be displayed between a tag
 *
 * @param {string} to
 * This is the href the link will redirect to
 */
function Link({ title, to }) {
  const sumValues = sum(2, 3);

  return (
    <a className={styles.bgColor} href={to}>
      {title}
    </a>
    // <>
    //   <img style={{ width: 100 }} src={profilePic} alt="" />
    //   <Form.Label htmlFor="inputPassword5">Password</Form.Label>
    //   <Form.Control
    //     type="password"
    //     id="inputPassword5"
    //     aria-describedby="passwordHelpBlock"
    //   />
    //   <Form.Text id="passwordHelpBlock" muted>
    //     Your password must be 8-20 characters long, contain letters and numbers,
    //     and must not contain spaces, special characters, or emoji.
    //   </Form.Text>
    // </>
  );
}
export default Link;

Link.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
