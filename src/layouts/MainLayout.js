import React from 'react'
import { Layout } from '@ui-kitten/components'

const MainLayout = (props) => {
    return (
        <>
            <Layout style={{flex: 1}}>
                {props.children}
            </Layout>
        </>
    )
}

export default MainLayout