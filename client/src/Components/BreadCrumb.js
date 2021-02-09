import { emphasize, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import FolderIcon from "@material-ui/icons/Folder";

// Breadcrumb styling
const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

// function responsible for updating the link
const redirectHandle = (link, loading, data, item) => {
  //  set to show loading circle

  const index = data.indexOf(item);
  const newHistory = [...data.slice(0, index + 1)];
  // check if it is the same item that clicked!
  if (index !== data.length - 1) loading(true);
  return link(`?${newHistory.join("&")}`);
};

export default function BreadCrumbs({ data, setLink, wait, setWait }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {data.map((item, index) => {
        if (index === 0) {
          // only for root directory to have home icon
          return (
            <StyledBreadcrumb
              key={item}
              disabled={wait}
              icon={<HomeIcon fontSize="small" />}
              label={item}
              onClick={() => redirectHandle(setLink, setWait, data, item)}
            />
          );
        } else {
          return (
            <StyledBreadcrumb
              key={item}
              disabled={wait}
              icon={<FolderIcon fontSize="small" />}
              label={item}
              onClick={() => redirectHandle(setLink, setWait, data, item)}
            />
          );
        }
      })}
    </Breadcrumbs>
  );
}
