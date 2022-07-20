import {Avatar, Button, Descriptions, Layout} from 'antd';
import {useDispatch} from "react-redux";
import {useUser} from "./userState";
import {useState} from "react";

const {Sider, Content, Header, Footer} = Layout;
const ProfilePage = () => {
    let dispatch = useDispatch();
    // let route = useRouter();
    const {user, isAuthenticated, loading, fetched} = useUser({redirectTo: "/login"});
    const image = user.image;
    const [size, setSize] = useState('default');
    // console.log('user...',user);
    return (
        <>

            {isAuthenticated && (
                <Layout>

                    <Sider style={styles.sider}>
                        <Avatar style={styles.avatar} size={100} src={image}/>

                        <h1 style={styles.name}>{user.name}</h1>
                        {/*<p style={styles.email}>{user.email}</p>*/}


                    </Sider>
                    <Content style={styles.contentt}>
                        <Header style={styles.header}>
                            <h1>Profile</h1>
                        </Header>
                        <div style={styles.content}>
                            <Descriptions style={styles.descriptions}
                                          bordered

                                          size={size}
                                          extra={<Button style={styles.buttons}>Update Profile</Button>}
                            >
                                <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                                <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                                <Descriptions.Item label="Token">18:00:00</Descriptions.Item>
                                <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
                                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                                <Descriptions.Item label="Official">$60.00</Descriptions.Item>
                                <Descriptions.Item label="Config Info">
                                    Data disk type: MongoDB
                                    <br/>
                                    Database version: 3.4
                                    <br/>
                                    Package: dds.mongo.mid
                                    <br/>
                                    Storage space: 10 GB
                                    <br/>
                                    Replication factor: 3
                                    <br/>
                                    Region: East China 1<br/>
                                </Descriptions.Item>
                            </Descriptions>


                        </div>

                    </Content>


                </Layout>
            )} {(!isAuthenticated && loading && !user && !user.profile) && (
            <div><h1 style={{color: 'white'}}>Loading...</h1></div>
        )}


        </>)
}

const styles = {
    sider: {
        background: '#fff',
        padding: '10px',
        height: '100vh',
        overflow: 'auto',
        justifyContent: 'center',
        textAlign: 'center',
    },
    name: {
        fontSize: '2rem',
        marginTop: '10px',
        marginBottom: '10px',
        color: '#000',
        fontWeight: 'bold',


    },
    avatar: {
        marginLeft: '20px',


        width: '100px',
        height: '100px',
        borderRadius: '50%',
    },
    email: {
        fontSize: '13px',
        marginTop: '10px',
        marginBottom: '10px',
        color: '#262525',
        fontWeight: 'normal',
        textTransform: 'capitalize',


    },
    buttons: {
        marginTop: '10px',
        marginBottom: '10px',
        background: '#262525',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '13px',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        cursor: 'pointer',
        textAlign: 'center',
        justifyContent: 'center',
    },
    header: {
        background: '#fff',
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    descriptions: {
        background: '#fff',
        color: '#262525',
        padding: '10px',
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    contentt: {
        background: '#fff',
        color: '#262525',
        padding: '10px',
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
}
export default ProfilePage;