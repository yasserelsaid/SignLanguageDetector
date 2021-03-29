import Header from './header';
import Footer from './footer';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  body: {},
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.body}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
