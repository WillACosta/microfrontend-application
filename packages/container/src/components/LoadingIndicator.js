import React from "react"

import LinearProgressIndicator from "@material-ui/core/LinearProgress"
import { createStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => {
  return createStyles({
    progressBar: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
})

export default () => {
  const { progressBar } = useStyles()

  return (
    <div className={progressBar}>
      <LinearProgressIndicator />
    </div>
  )
}
