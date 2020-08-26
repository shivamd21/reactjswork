import React from 'react'
import './CSS/sponsor.css'
import './CSS/home.css'
import ReactPlayer from 'react-player'

function Sponsor() {
    let image = [
        'data:image/png;base64,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',
        'data:image/png;base64,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',
        'https://i.pinimg.com/originals/3d/47/17/3d4717a390e0331b8fe70dedba54df62.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVf4t_CTHBrPG6UASCIjT6Dt57UGPDENOfSA&usqp=CAU',
        'https://cadsindia-rcg73ewp.stackpathdns.com/wp-content/uploads/2017/03/tata-projects-1.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRC0paXp3aS0OwRbrleuUaHnUgidu89zxs0uw&usqp=CAU'
    ]
    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="card">
                        <div className="card-body">
                            <img className="img-fluid" width="1460" height="1345" src="https://www.zoho.com/sites/default/files/zoho_general_pages/app-innovation-challenge.jpg" /><br />
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br />
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                    <p className="myheading">
                        <h1 className="myheading1"><b>Trusted by more than 50 million users globally</b></h1>
                    </p></div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <div className="row">
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                    <div className="videoelement">
                        <ReactPlayer url="https://youtu.be/jRKRfeM1k5M?t=126" />
                    </div>
                </div>
                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                    <div className="row">
                        {
                            image.map(p =>
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                    <p className="myAPPcontent">
                                        <img className="sponsor" src={p} /><br /><br />
                                    </p><br /><br /><br />
                                </div>
                            )
                        }
                    </div>
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <a className="customer" href="#">More Customer</a>
                        </div></div>
                </div>
            </div>
            <br /><br /><br /><br />    <br /><br /><br /><br />    <br /><br /><br /><br />
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <p className="myAPPcontent">
                        <p className="head1">   <b>G Suite Integration</b></p> <br />
                        <p className="head2">Solve all your G Suite business needs with Zoho. <br />
                            <a className="customer" href="#">Learn More</a>
                        </p></p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">

                    <p className="myAPPcontent">
                        <p className="head1">   <b>Partner with Zoho</b></p> <br />
                        <p className="head2">Zoho partners with top notch VARs, MSPs, SIs, consultants and technology partners. <br />
                            <a className="customer" href="#">Learn More</a>
                        </p></p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <p className="myAPPcontent">
                        <p className="head1"> <img className="myuserimage" src="https://www.zohowebstatic.com/sites/default/files/styles/product-home-page/public/Developer-96.png?itok=jADsnCdR" />
                            <b>Developer</b></p> <br />
                        <p className="head2">Build and sell extensions for Zoho products. <br />
                            <a className="customer" href="#">Learn More</a>
                        </p></p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <p className="myAPPcontent">
                        <p className="head1"> <img className="myuserimage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACPCAMAAAD0vXihAAAAq1BMVEX///85fLw2erstdbnlPD+/0+gbbrUicbeMsNY2aqktZKbH0uP0sLL+9vYvd7nqY2XlNDfkLC/lODvoUlT85+jxnJ5gk8htnMwnW5/I1+nHy93S4O/1+fzp8Pfd6PPjJyirxOBMh8GZuNp7o8+3zOT4y8zhAADARVyCqtP62triDBHra27kICLwlJb509T3w8Pvh4nnR0rsenzpW1zHnq/FVmnMvs7HiJjHYnW5gMFnAAAE0ElEQVR4nO2aDX+iOBCHN0SIdjUF14bjCMiL3dK321Xv7ft/spsJUAlr76wEt7uXpz+tjhD+SWZCMuTDB4vFYrFYLBaLxWKxWCwWi8VisVgs7xkZVTnz3ggRWTKOnEhwyp0upHnhG6nf2h/gr/nCaV7IEeQUHodrHOU1ewsTqXE5JcOrctqF61/gK29Nhw/qNBIblpMxLJbl5fRtVCFRZ+ZmnSjCalIRn+EISeHguaVRPSHHIs90SxcFOSZ7LIbm4eLsJs8o1KYyqEcV6J5/fo7VMRj00F0OGVBeBudTczGfYP3CAQVE4EAsMyVHRZdTDChAVchchBUMumtQfGCH56YcSEJpA6ILgYAYWKMOCZQ1MFxTDwI0MyPHhDdKYtCBChic2cBoVSOGGTmDRx+koMPr1GCkrQ2OQLEJX0xyY7ewbPDoA8iSDh0zWsyMZTihMzLnwLHeQEtHOIMacs/pFuRtBhcjh96TW6Yw1HMtUmUhip4nZKLsWdyw1HsHbzpDRw0kh3J098kYZVPtmJhRTx8RUkKZPgNTczoDDuR9M/pATWmuWXACoK8gXA9aVbu66vcBc8wW2tcjBbaYdkyFIahdXa2PtF6OqBk9wumFe6JWw91rSTiGcO1aapDQWsxUfxX9uTwWrIeui4tiLXjUFCXs1kLFlwl/jom+1klzXAE7nbFNgsuDxYsOJ5Vg4Vm3mIIbWhRKVfaLoDSnKkcAi9XGkpS1xcnbVpTg3/oSWWYq6WFkhhgzKIvmG6nKVXK4eqnEjnSVhaIH8UJ5VRSixcs6RVSYjegNEmeT4cUcRvIwJ0zldQquLE4uaguhU+wzZRGEqo/tLSYtRc6wBGpsQj+lymU4V8kTB+YxG0ez0ErGqtHQUv9vB8NEMGWB/jO3IMw4a3NO0E7oJhE5WKiaHaVw4ReLN23bwq0P4yw0mXFJK4I155Tn07rcpMgbCynrisvGwikJD6Gm9HBHDL8j9xRlpRCi2hwaPdlUYCmzjsWdhkKERTdNhGMTL6MxMohngXqY6WzdAN6dHuf/okduqjOCZDw9BaX87YLG0wPTMPr2Cfm70zNafP0kesbsr96CbnV7v+gfBbZL6aG99rn3Hz4/3mqKVjdPD5+fv5Oem4f1eu1fz39bLEDUYnH/5esWLE/b1WX09P3n+Wm9DpZ+MNlf777uHvdbP1gG3+i5nD/PUc9kMlkulz6wXMJn1LPvduEF22fu+9BfqKIFGmvt+9ffTc9kst19CgK/IZjsHv3JxfT0/Rn0LD+tVrc3uz1y/fzlfnET9PWM6T/6+DMPUI9+0GX1UKvH6vmJ9Nj4+pH00HfXX/zI/eK/9Ix2/yopcbS080l6MgMPO4+jHjl2a3pSf0GrOnyUbEtEentuTtETY6bV7N6fFnxOoD24PKG/UkxzDtkZ82+4TCXmX/KA87UfbPt6nvxg336RkZITjpQck2W9FaxwI8Xvd3d3f/z5q8ZfYPv7o/rZ3ZSYc3VMPLR4RZCgKnvK6q1zbDabXV39onEFtlm9sY4xlaU+IydyMqmos7z1Tkc6e4VmU6TS7mTjyQEKQl+2RfLX9LRpaE75CDshddKpIM1WR3Z1HK/53cmFe4E8r4yjho/HaX+OR9pIa7FYLBaLxWKxWCw/Iv8ADNFsc8Zk38oAAAAASUVORK5CYII=" />
                            <b>Marketplace</b></p> <br />
                        <p className="head2">Install extensions that add new features to Zoho products <br />
                            <a className="customer" href="#">Learn More</a>
                        </p></p>

                </div>

            </div>
            <br /><br /><br /><br />    <br /><br /><br /><br />    <br /><br /><br /><br />
        </div>
    )
}

export default Sponsor
