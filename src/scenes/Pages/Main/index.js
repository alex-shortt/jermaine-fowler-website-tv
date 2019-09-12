import React from "react"
import { Link } from "react-router-dom"

import Helmet from "components/Helmet"

export default function Main(props) {
  return (
    <>
      <Helmet title="Main" />
      <Link to="/dicks">Helooooo</Link>
      Last login: Fri Sep 6 13:59:28 on console <br />
      Alexs-MBP-8:programming alex$ git clone
      https://github.com/metaplug/metaplug-serverless.git <br />
      Cloning into 'metaplug-serverless'... <br />
      remote: Enumerating objects: 259, done. <br />
      remote: Counting objects: 100% (259/259), done. <br />
      remote: Compressing objects: 100% (140/140), done. <br />
      remote: Total 259 (delta 127), reused 239 (delta 107), pack-reused 0{" "}
      <br />
      Receiving objects: 100% (259/259), 195.17 KiB | 47.00 KiB/s, done. <br />
      Resolving deltas: 100% (127/127), done. <br />
      Alexs-MBP-8:programming alex$ cd metaplug-serverless/ <br />
      Alexs-MBP-8:metaplug-serverless alex$ cd .. <br />
      Alexs-MBP-8:programming alex$ git clone
      https://github.com/alex-shortt/react-boilerplate.git <br />
      Cloning into 'react-boilerplate'... <br />
      remote: Enumerating objects: 3, done. <br />
      remote: Counting objects: 100% (3/3), done. <br />
      remote: Compressing objects: 100% (2/2), done. <br />
      remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 <br />
      Unpacking objects: 100% (3/3), done. <br />
      Alexs-MBP-8:programming alex$ cd react-boilerplate/ <br />
      Alexs-MBP-8:react-boilerplate alex$ <br />
    </>
  )
}
