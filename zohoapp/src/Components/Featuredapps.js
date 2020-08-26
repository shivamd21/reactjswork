import React from 'react'
import './CSS/home.css'

function Featuredapps() {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                    <p className="myheading">
                        <h1 className="myheading1"><b>Your Life's Work, Powered By Our Life's Work</b></h1>
                    </p></div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 "></div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 ">
                    <p className="">
                        <p className="myheading2"><b>Unique and powerful suite of software to run your entire business, brought to you by a company with the long term vision to transform the way you work.</b></p>
                    </p></div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 "></div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                    <p className="onlyheading">Featured Apps</p>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 ">
                    <div className="row first">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <p className="mycontent">
                                <img className="myimage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCTa7jaaUxlwuw00k70VN8cUC_AFRMSdlRuA&usqp=CAU" /><br />
                                <b className="mylabel">CRM</b>
                            </p>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 ">
                            <p className="mycontent">
                                <b className="featured">Complete CRM Platform</b> <br /><br />
                                <p className="myalltexts">End to end, customizable CRM Solution for growing businesses and enterprises</p><br /><br /><br />
                                <button className="btn btn-danger ">SIGN UP NOW</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 col-xl-6">
                            <div id="main">
                                <div id="d1"> <img className="logoimages" src="https://zohowebstatic.com/sites/default/files/ogimage/mail-logo.png" />
                                </div>
                                <div id="d2">
                                    <b className="mylabel">Mail</b> <br />
                                    <p className="myalltexts">Clean and ad-free</p> <br /> <br />
                                    <button className="mybtn">SIGN UP NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 col-xl-6">
                            <div id="main">
                                <div id="d1"> <img className="logoimages" src="https://www.vhv.rs/dpng/d/356-3560958_zoho-books-logo-hd-png-download.png" />  </div>
                                <div id="d2">
                                    <b className="mylabel">Books</b> <br />
                                    <p className="myalltexts">Smart accounting</p> <br /> <br />
                                    <button className="mybtn">SIGN UP NOW</button>
                                </div>
                            </div>
                        </div><br /> <br /><br /> <br /><br /> <br /><br /> <br />

                        <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 col-xl-6">
                            <div id="main">
                                <div id="d1"> <img className="logoimages" src="data:image/png;base64,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" />
                                </div>
                                <div id="d2">
                                    <b className="mylabel">People</b> <br />
                                    <p className="myalltexts">Smart HR managment</p><br /> software <br /> <br />
                                    <button className="mybtn">SIGN UP NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 col-xl-6">
                            <div id="main">
                                <div id="d1"> <img className="logoimages" src="data:image/png;base64,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" />
                                </div>
                                <div id="d2">
                                    <b className="mylabel">BackToWork</b> <br />
                                    <p className="myalltexts">Ensure Employee Safety </p><br /> at workspace <br /> <br />
                                    <button className="mybtn">SIGN UP NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                    <p className="onlyheading">WORK REMOTELY WITH</p>
                </div></div>

            <div className="row">
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 ">
                    <div className="row second">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <p className="mycontent">
                                <img className="myimage" src="https://www.zohowebstatic.com/sites/default/files/styles/product-home-page/public/remotely/remotely-logo.png?itok=wqiWQm32" /><br />
                                <b className="mylabel">Remotely</b>
                            </p>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 ">
                            <p className="mycontent">
                                <b className="featured">Your home-office toolkit</b> <br /><br />
                                <p className="myalltexts">A suite of mobile and web application<br /> designed for distributed system</p><br /><br />
                                <button className="btn btn-danger ">SIGN UP NOW</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 col-xl-6">
                            <div id="main">
                                <div id="d1"> <img className="logoimages" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBAPEBIQDw8QDw4QEBAPEA8QDw8PFhEWFhUVFRYYHiggGBolGxYVITEtJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi8lHSYtLS0vLS0tLS0rLS8tLS0tLSstLS0tLS0tLSstLS0tLS8tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQCBQYBBwj/xABBEAACAQICBQgIAwcDBQAAAAAAAQIDEQQhBRIxQVEGEyJhcYGRoQcyQlJyscHRI4KyM2JzkqLC4RSj8BY0NUNj/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAECAwQFBgf/xAA2EQACAQIEAggFAgcBAQAAAAAAAQIDEQQSITEFQRMyUXGBkbHRImHB4fBCoQYUIzNSYvFyNP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGNSainKTUYpXbbSSXWwSk27I5/SPK/D07qmpV5cY9Gnf4nt7kzXniYR21OnQ4TWqay+FfPfy97HN47lpi5XVNU6K3asdea75ZPwNeWKm9tDq0uDUI9Zt/sv29zU1uUeMltr1PytQ/SkYnXqPmbceHYaO0F6+p5S5QYpO6r1u+cpLwZHTT7RLAUH+heRscJyzxUPWlGquE4R+cbMyRxNRbmtU4Rh5bK3c/e50OjuW1OeVSnKD4wanHwya8zMsZH9SscyvwecNYSv+x0GE0nQq/s6kZP3b2l/K8zYhVhPqs5tTD1KfWjYtmQwgAAAAAAAAAAAAAAAAAAAAAAAAAAAA0+mdP06F4R/Ere4nZQ65vd2beq2ZiqVow7zdwuBnX12j2+xxmkcfWru9WTkr3UFlTj2R+ru+s0KlWU9z0OHw1OivgXjzKEqZiNtMhnSILqRXnRIMikV50wWuRu5JNi5g7rtZrVJ62RrVdS/GUlt6PxNIrexr2vsbDCafq0vVrOy9l604271l3GeGLnD9Rr1OHwqbw+hucHy2jsqxv+9TUl5P7mzDicf1ryNCpwaf6H5/n0N5g+UGFqW1asYt+zPoPz2m3TxlGeilr5HPqYGvT3j5am0TNo1AAAAAAAAAAAAAAAAAAAAAAAcxyg5Q2cqGHfSTcalVZ6r3xhxlxe7ZtvbVrV8ukdzrYLh+a1SptyXb838vXu35ZL5tve23m23vZot3O4tA0CbmLiC1zBwIJTI5UgXUiF4dt2Su3sS2ixbPbVma0cl67z92P1ZDSW5V4hvq+ZlUerlFKCt7O3x2mtIrFJ6vUruJhZmTMWijJEYmNshsnhEwswyZ03JyvUp09ZSdpyk1F3cVFdFZbrtN5cUSsdWw8kqctOx6r87jk42nCpOzW3PmdVgtIxnk+jPhufYegwPFaeI+CXwy7OT7vY41bDyhqtUXTqmuAAAAAAAAAAAAAAAAAAcryt5Qal8NRlao0udnF504tX1U90mvBPi01rV62X4VudjhuA6T+rNfDyXb9vU5OnJWSWSWStsSNA7ziSqQK2PUwQegCwBnRw7lfdFetJ7I/56iUrlZ1FHv7CRtRVoZLfJ+tL7LqIb7DHrJ3l9iCxjky9yCtHPuNeZkgyCUTCzMmYNGNljKETFJlWyeNNu0Y+tJqMfibsvNlFqzFKSWr2R1FOCilGPqxSjHsSsjRqSzSbOQ23q9yaKKGNm40djb9Cbz3Pj1PrPUcK4o6lqNV68n2/J/P179+fXo2+KJsTvmqAAAAAAAAAAAAAAAaPldp5YSg5K3PVLwoxea1rZya92O3wW8xVqnRxvzN/h2CeKq5f0rV93uz5XDFNtyk3KUm3Jt3cpN3bfW2cptt3Z7TolFWS0LdKuDHKBap1iTC4E8ZkmNozUgRYs4Shr3berCNnOXDglxk9yLRV9eRhq1Mmi1b2X5yJK9dO0YrVhH1Y7e9ve3xIlK/cY4Qa1er/AD9ivKaKGVIxMciSKtuMEy8CvIwszIwKMsZwRhkUZstD0r1NbdTi5fml0Y/3P8pjk8sHLwNPFStC3b6LV/TzN5FHPOeyaKBRksSy0MbN1gq+tHP1lt6+s9pwzG/zFL4ust/fx9Tn1YZXpsWDpGIAAAAAAAAAAAAxnNJOTaSSbbeSSW1sEpNuyPhPKrlA8Zip1k3zS6FCLurUk8nbjLa+1LccmtUzyvyPoPDcEsLQUH1nq+/7bf8ATX0sQYTecS7RxJJhlAu0sQSYZQLdKuSYJQL2ETnJRW/a3siltb6kSldmCq1COZmwxFRWUIZU47L7ZS3yl1vyVkTJ8lsacIu+aW7/ACxUnIqZkiCcwZFEidZohpMuokNbG2tcxSpXLwpXMFjYPfYwSpNGTomiSM0zBJEONiaDMEjGzoND0rUlLfUbn+X1YeSb/Ma+KdkoeP5+czl4mV6jXZp9X7eBsIo0zVZNFAxsliiyRRlnC1NWSe7Y+w6GAr9BWU+Wz7vzUxVI5lY257Y0AAAAAAAAAAAADhvSvpzmcKsNB2qYpyi7bVQjbX8bqPY3wNfEzyxsuZ3OBYXpa/SPaPry8t/A+PKRzWe2RJGZBJNCqQRYt0sQCjgXaOJJMMqZ1WBpOnTs/Xmk59S2qP1fX2GTZWONWn0k9Nlt7+wqSIISK1SZBliitUmQZUivOZJkUTGlg6teSp0YSqTvsiti4t7EutkqLlokTKrTorNUdkVNIaOq0akqNVas4Wur32q6afea1aq6cnBrUy0cVTqwU4apkMITWyT8jWlXvuizqX5Fqni5rJ5rjbNGJ5WYmovU7rR+kKNZfgvKKS5uWU4QSsk12WV1dHPxMZOblyOBVpVKfX8+TZeijVNdk0UWRRksUZIoxslSM0UVZs8JO8V1ZHruG1ukoK+608vsadRWkTG+YwAAAAAAAAAAfAuX+l/9Tj68k706T5ilw1abab75az7Gjm15ZpHu+E4foMNFc3q/H7WOeTMFjqJmSkRYtczjMixYljMgG85M4bnKmvLOFK0nwlN+rHyb7ustFamljquSGVbv05nVzmWOOkV6kwZUirUmQZYoqzmDKkbnk3ybqYp68r06Cec/am96hf57uszUaDnq9jRx3EIYZZVrPs7O/wBj6PgMBSowVOlBQiuG1vi3tb7ToxgoqyPK1q9StLNUd2cp6Q9Gp81iEs1+FPrWbj/d4nG4vSso1V3P6HY4NiLOVJ96+pxLonDzHezGLpE5icwppxkpRbjKLupLJpk3IlaSs9js9BaU56LjKyqwXSSyUo+8vrw7zTrUrfFHY4uKw/RO66r/ACxuIowo0mSxM0SjJEZUVLeAlm11XO5wap8codqv5f8ATBWWiZdPQGuAAAAAAAAAazlNpH/T4PEV72lClLU/iPow/qaMtGGeoomKvU6Om5dh+f3Ti1ms+Kyf+TsV+H4et1o2fatH+d5y8F/EHEMG7QneP+MtV7rwaIZ4V+y9bqeT+3yOLX4LVjrTeZeT9j2eB/jTDVbRxMXB9q1j7ryfeQvJ2d0+DyOPUpTpvLNNP5nraGKpV4Z6UlJdqdz1Mx2NlMyUyLFkzvtDYbmqEIPKT6c/jkll3Ky7i6VjhYip0tRy5bLu/NS1KQMaRBUkQZIoq1JEGaKNnyY0E8VV6V1Qp2dSSy1nugnxfku1GajSzv5Gpj8asNT06z29/wA9z6fSpxjFQilGMUlGKVkktiR0kraI8jKTk3JvVmZJU1nKWhr4WquCU1+Vp/JM0uIwzYafyV/LU28DPJXi/DzPnUsOeOUj0ymRSoFsxdTIpUi2YtmMsLUlSnGpH1ou9tzW9Pqauu8m6IqRVSLi+Z39GalGM45xlFSj2NXNSUcsrHnpJxbT3RMiyKMyRkTKk+DfTXXdeR0OFzy4mPzuv2MdVfCbI9cagAAAAAAAABwfpgxuphKVFOzrV02uMIRbf9Tgb/D43qOXYjn8Slako9rPkkZnZucFokjMm5RxM9ZNWdmuDzRWpThUWWaTXzMlCvWw889GTi+1OxDPCRfqtx6tqORiOCUpa0nZ9m69/U9ZgP4zxNK0cTFTXatJez8l3lrQmj5TrwUo3hH8STWatHP52OJXwFahrOOnatV+d56/DfxFg8ZTaoz+Lsej9n4NnbORqFkRykQXRDORBkRFSoyqTjTgrynJRiutuxKTbsi8pxhFylsj6zojR8cPRhRh7K6Ut85vbJ/84HUhBQjZHjMTiJV6jnL/AIuwuFzAACtpNXo1l/8AKp+lmDFK9Ca/1foZaH9yPevU4WdA8ApHoVMgnQLqRdTIZUC2YupkUqBOYupnR8nJ3ouD/wDXNpfDLpLz1hU1SfgczGK1S/ajboojUMi1yCTDvpR7UbeClbEQ70Un1WbU9saQAAAAAAAAB8j9NOKviMLS9yjOf887f2HV4erRbORxF3lFHzxTOhc5uUzjMm5VxJIzJuUcTNVCblcp1fJGl0KlXfKSguyKu/NrwNTFSu0jPRjZNm9nZ7Un27fHac6phqVTrI6eH4nisP1Ju3Y9V+/0K9TDrc2u3NGlU4Z/hLzO7hv4nW1eHjH2fuVatCa3XXGOfltRo1MLVp9aP1PRYTimExGlOor9j0fkzovR9o/WqTxMllS6EP4kl0n2qOX5i2Fhd5jDxivlgqS56vu5fv6Hem6ecAAAKuk5Wo1OuDj3vL6mpj5ZcLUf+r9DLQV6ke85SVM+fpnZUiKVIsmXUiGVIsmXUiGVItcspGx0ArSqLjGL8G1/cZFrB+BrYrVJm6RRGmeliCSh60fiXzNnB/8A0Q/9L1Kz6rNse5NEAAAAAAAAA+H+mCrfSVvdw1GPnOX1Ovgv7XicfHa1fA4nWNw0rGSkLkWM4zJuVaM1Mm5Wx9B0FT1cNRXGGu/zvW+TRoVXebM0VZF1soGYSkSijI3IumY2fROTeH1MNSv60485K+28s1fsVl3HNrNObsekwqkqMczbdufz1t4GzMRnAAANfpqf4aj70l4LP52OLx6rkwuX/JpfX6GzhV8d+w0bieLudG5hKBa5ZMilTJuWTIpUy1yykWtEwtOXwP8AVEzU9Yy8DFiH8K7za2FjUPSQSYZdOPabvD43xMO/0KVOqzantTSAAAAAAAAAPhPpd/8AJz/g0P0s7GD/ALRx8b/dOKubRq2MkwRYyUiSrRks8lteS7RcWPqijqpRWyKUV2JW+hzjIzGTBVkUmSirMYxcmorbJqK7W7Fr2KKOZpdp9ZhFJJLYkkuw5R6haHoAAABodMVtapZP1Fbveb+ngec4s41qig9o+rMLxM6cvgZQ5xrar9cfscGeCf6WblPiMXpNW7j2M4vY+7eakoSh1kb9OrCavF3DiVuZbkcoFrlky1o6n60uxfNv6G1RX9Nv528l9zDWlsi6WsYALAsYKPTXUmzq8IhfEJ9ib+n1MVV/CbE9WaoAAAAAAAAB8S9MlC2kIy3TwtJ96nNP5I62Cf8AT8TkY7Sr4HAyibZqngB6mSRYt6OjetRXGtSXjNFZ9VhLU+nSZokkcmCCKTJKsm0Yr4iguNeiv9yIl1X3Mmkv6se9ep9Uucw9GLgHoBW0hilSpub27IrjJ7DDiKyo03N/jKVJqEbnMKrfNu7eb7Tysm5O73OfmuZqRBa55OmntXfvDVyVo7ow1JLY7rhL7mtPCwltobdPHVYb6o95/wB5OPy8TUnhZx21OhSx9Kej0fzNpho2hHr6Xjs8kjZyuFOEXva78ftYyylmk2iQrYqekpAt4CO19iPQcFp9afcvf6GCs9kXDumAAAAAAAAAA+W+mnB9LCVrbq1KT6+jKP8AcdHAS6yOZxCOsWfLp0zoHPRC4AseWALmhv8AuMP/AB6P60RPqshbn0ps0SxHJklWRSZJVmWDqatWlL3atOXhJMNXTQpu04v5r1PqvOHLPSHqmAKlaMYuUmoxim5NuySW1shtJXZDaSuzhdLab5+peN1TjlBPJtb5PrZ53GYh1p6dVbe5xa+J6SWmxFSxJpFY1C1TrkGZTJ41QXUiRTBa5mre1lFJuT4RSu34FoJN67c+7mTpzNFLSVXXlOM5R1pN6u2KW5WeWzI1p1ZTk5Pn+WMCxFSLvF2L2G5RyWVSCl+9Tdn/ACv7oreL3N2nxOS66v3G3wulaFSyjNKXuz6Er9+T7myyjfZm/TxlGps9fmb/AAsbRXXmer4fS6OhFPd6+ZFR3kSm6UAAAAAAAAAOT9Jej+e0fUkleVCUK67I3jP+iUn3GzhJ5ai+ehqY2Gak32anxWdI65xivOkCSGVMkEmAerWpS4VaT8JoiWzJW59KmadixFJgqRSZNijI5MskUZ9K0bi+co06nvQi38WyS8Uzl1I5ZNHpKU88FLtRni8fTpQdSrNQgt8uPBLe+pGKUlFXk9C05xgs0nZHCae5TyxL1IXhQTyj7VR7nL6L/i42KxLq/Cur6nDxWLdX4Y6R9TW06xoOJp3LVOuUcS6kWqeIKNGSMy1TxBUzRmWadcGVTPMfibQ1Ftna/VBbF3v5dZWc7Rst36ff6EzlpY1LNYwGIILOjcJz1WnS3Sktbqis5PwTM+Go9NVjT7d+7mXpwzyUT6ZFWVlklklwR7Y7h6AAAAAAAADxgENenGUZQkrxlFxknscWrNeBKdndENXVmfB9K6MlQrVaEttKbjf3o7Yy74tPvO3CanFSR5+pBwk4vka6dIuUK9SkSSV5wazW3d2kg+iRrKUYyWyUYyXY1f6mokS2YSkWsUbI5MbFbkUpi6Kssf8AVtfC0ObpwhJOcmpzbfN33aq253e3icviU5U0pxW+nsbuHxcqcMiRzmL0vWrz161SVSW676MVwjFZR7jz1Scpu8mYas51HeTuSUqxiaMLRcpVijRUtU6hVogsQqmNxJTLFOsUcS6kXsK7pyfqr+qXBfUxy+FXZs09dXsYVZttt7Wazd3dlm7kMipVmIIOt5FYCyniJLb0IdifSfjZdzPQ8Gw9ous+ei7uf7+h0MFT0c2dSdw3wAAAAAAAADFgGEgDhvSLoXXUcXBZwShWS3079GXc3bsfUb2Dq2eR+Bz8dRus65bnz2pQOgcwrVKIBVq0iQdLoetehBb4Jwfc8vKxjktSGWXIGNsyTMbIPJQTKXBVxOD1k47U9qKzUKkXCezGq1OaxNCVKVpbNz3Nfc8xicNOhKz25Pt+5lTUkZUqxrNBou0a5Roo0XaVYq0UsWqdUq0QbPA4VytKV4w3e9P4fv8AMwVJxhuZ6dJy1exsJy2K1klZJbEjRnNyd2bTImVKkUiCrJcDhJVakaUdsna/ure+5GbD0ZVqipx5/su0tTg5yUUfSsNQjThGnFWjCKiuxHtKcI04qEdloduMVFWRKXJAAAAAAAAAMWAYSAIasE04yScWmmnmmmrNMJ2IaufNOUGgXQqWV3Sk26cttv3W+K813nVoVukWu5x8Rh+jlpsaCthTYuatilWw5ILOhparlDdLpLtW3y+REirNnYq2UsZGFkAowLlQYVaUZrVklJPcyk4xnHLJXQNc+TevJRoy1W75Tu4qyb2rNbOs4eMwsKMHUT0XL2M1O83lPVyVxi9mEutVI287HJ/mKb5mV0JlzDcmcR7cqcF8Tm/BK3mUliaaI/l5czc4TRNOnm71JcZpaq7I/e5qzxLfV0Lxoxj8y1N3NZu5dkbIKmDBBFIgqztuSuieahzs1arUWx7YQ2pdr2vu4HqeGYPoYZ5dZ/suz3+x1MLRyRzPdm+OobQAAAAAAAAAAPGAYSQBHJAgpY3DRqQcJrWi9q+q4MtGTi7oiUVJWZxeldCypt+1DdPh1S4PyOjSrqenM5VbDOGq2NHXwRsJmq4lGWHcZKS2p3LXKtGyirpNbzDJlbHjiY2ytjFlWQYsqQEVZBudA0vXqPdanHtdpS8tX+Y87xytZRprv9vqb2Ejo5eBtmecNsiqMhlWV5sqYmQyIKsxBBi0TYg3vJnQ2vJV6i/Di7wi/bkt/YvNnZ4Zgc7Vaa0W3z+fcjbw1C7zy2OxPRHRAAAAAAAAAAAAABi0ARyQIIpxAK1WkAaLH6Hi7uPRfD2f8GzTxMo76mrUwsZarQ0GJwDTs19jchVjLY0KlGUN0VVR1fh+XWS9TC4idMxMq0QygVZRojcSLlLHlijIsdPgaOpTpx2PV1pfFLpNd10u48TxCt0teTWx1YRyxUSaRpFyOYKMryRWxjZG0LFQoFlEWNlojRXOSTl+zTz/AHursOpgeH9K89Tq+v2NmjQzavY7OlFJJLJJJJLYkejStojomZIAAAAAAAAAAAAAB4AeNAGDiARygAVq1EEGmx+E2lkyrRocTCUd11wNiFZ8zVqYeL20KcasHknb915Sj918jOpKWxpTpOG+xlKiUZiykUqBRso4meDwetUhFq6cry+FZyXelbvNXGVujoykXpU7zVzotVu7e1u7PFuLZvnkoDIRYjlAZCGiJ0xkKWMXTSTbsks23kki0aTeiIykmjqHOy6Kep7zy1uzqOvheHLrVPL3NmlQ5yOwweHUUlwOykbiLZJIAAAAAAAAAAAAAAAAABi0AYtAGMoAFath7gg1ON0dfcSmQ0czpPQt9xdSMbiaZTxFB2tztP3X6y7H9zMqv+Rqzw6esdC/hNKUJ5OXNy92p0X4vJk6Pqs15U3HdG90VhleU1mrKCfbaUvlHzONxOTdqfiZaMNLmy5o5HRmex46RHREWIMQ4QWtUlGEeM5KK8yypX2IsamrpaMnq4eEq0ves4U13vN9y7zYp4KUt9CVSbLOC0JVqyU8RLWs7qCVqcexb+86NHDQp7bmeFJI6zBYJQSSVjaSMti8kSSegAAAAAAAAAAAAAAAAAAAA8sAeWAPHEAwlSQBWq4NPcCDXYjQ8XuJuRY1GL5LQltivAXK5SlT5Lzp/sqlWkuFOcox8E7GOVOMt0RkLEdFY1ZLE1e9Qb8WjH/LU+wZDNaDxMvXxFd9k3D9NgsPTXIZET4bklST1pJzl7025PxZdQS2LKCN5hdEwjsSXcXsWsbCnRSJJJUgD0AAAAAAAAAAAAAAAAAAAAAAAAAAHlgBYA8cQDF00Aec0gBzSAMlTQB6ogGVgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z" />
                                </div>
                                <div id="d2">
                                    <b className="mylabel">Assist</b> <br />
                                    <p className="myalltexts">Support Remote<br /> Customers  instantly</p> <br /><br />
                                    <button className="mybtn">SIGN UP NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 col-xl-6">
                            <div id="main">
                                <div id="d1"> <img className="logoimages" src="https://www.zoho.com/sites/default/files/ogimage/meeting-logo.png" />  </div>
                                <div id="d2">
                                    <b className="mylabel">Meeting</b> <br />
                                    <p className="myalltexts">Meeting & webinar</p><br /> Solution <br /> <br />
                                    <button className="mybtn">SIGN UP NOW</button>
                                </div>
                            </div>
                        </div><br /> <br /><br /> <br /><br /> <br /><br /> <br />

                        <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 col-xl-6">
                            <div id="main">
                                <div id="d1"> <img className="logoimages" src="https://www.zoho.com/sites/default/files/ogimage/sprints-logo.png" />
                                </div>
                                <div id="d2">
                                    <b className="mylabel">Sprints</b> <br />
                                    <p className="myalltexts">Planning & tracking </p><br />tool for agile teams  <br /> <br />
                                    <button className="mybtn">SIGN UP NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-6 col-lg-6 col-xl-6">
                            <div id="main">
                                <div id="d1"> <img className="logoimages" src="https://www.zoho.com/sites/default/files/ogimage/showtime-logo.png" />
                                </div>
                                <div id="d2">
                                    <b className="mylabel">Showtime</b> <br />
                                    <p className="myalltexts">Virtual Training Solution</p> <br /> <br />
                                    <button className="mybtn">SIGN UP NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featuredapps
