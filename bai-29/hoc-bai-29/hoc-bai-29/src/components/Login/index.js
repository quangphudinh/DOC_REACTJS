function Login() {
    const isLogin = true;
    // if (isLogin) {
    //     return (
    //         <>
    //             <div>
    //                 Thong tin nguoi dung , nut Logout
    //             </div>
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //             <div>
    //                 Nut Dang Nhap va Nut Dang Ky
    //             </div>
    //         </>
    //     )
    // }

    return (
        <>
            {isLogin === true ? (
                <>
                    <div>
                        Thong Tin nguoi dung , Nut Logout
                    </div>
                </>
            ) : (
                <>
                    <div>
                        Nut Dang Nhap va Nut Dang Ky
                    </div>
                </>
            )}

        {isLogin && <div>Avatar</div>}

        </>
    )
}

export default Login;