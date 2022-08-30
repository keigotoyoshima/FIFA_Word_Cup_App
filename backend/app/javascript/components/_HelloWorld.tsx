import React from "react"

type Props = {
  greeting: string
}

const HelloWorld: React.FC<Props> = ({ greeting }) => {
  return <>
    Greetingts: {greeting}
  </>
}
export default HelloWorld