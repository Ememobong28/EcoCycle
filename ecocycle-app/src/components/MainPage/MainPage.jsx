import React from 'react';
import './MainPage.css';

function MainPage() {
    const features = [
        {
            title: 'Scan and Recycle',
            description: 'Scan the item you want to recycle and get recycling tips.',
            image: 'https://penless.com/wp-content/uploads/2022/10/downloadable_recyclereducereuse_F.png'
        },
        {
            title: 'Find Nearest Recycling Stations',
            description: 'Scan the barcode on the item to locate the nearest recycling station.',
            image: 'https://i.pinimg.com/originals/7f/f2/0c/7ff20c4aa9282d1151888408cd8a3c83.jpg'
        },
        {
            title: 'Get Points for Recycling',
            description: 'Receive points for every item/package you recycle.',
            image: 'https://images.squarespace-cdn.com/content/v1/5937054c6a496359c601ecb2/1499886487314-DMXJRN3543FWNG681TH3/Untitled-9.png'
        },
        {
            title: 'Redeem Points from Categories',
            description: 'Convert your points to categories like cashback, Uber credits, tickets, and more.',
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMWFhUXFxgaGBgYFxgaHxgbFxgXFxcZHx8aHSggGB4mHRcYITEhJykrLi4vGCAzODMsNygtLisBCgoKDg0OGxAQGi0lICUuLS0tLi0tLS0tLS0tLS0tLS8tLS0tLS0uLy0tLS0tLS4tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABFEAABAwIDAwgGBwYGAgMAAAABAgMRAAQSITEFQVEGExQiYXGBkTJSkqGx0QcVI0JTcvAzVGLB0uEWNHOCorJD8ZOjwv/EABoBAQACAwEAAAAAAAAAAAAAAAABBQIDBAb/xAA8EQACAQIDBAgDBQYHAAAAAAAAAQIDEQQhMQUSQVETYXGBkaGx0SLB8BUyU+HxBhQkM1JiFiNCcoKisv/aAAwDAQACEQMRAD8A3CiiigCiiigCiiigCio7b+0DbWz1wE4i02teEmJwpJid2lVHanLq4tUBT9q2FONFxrm3ioEAoxBctgoOFczmJEUBf6Ko7fLN6AObtXXHFpbZRb3XOStQUo84S2ObSEpJnOadr5RXdutvp1u00ytWAvNvFaUqIJRIUhJSkkYSTvIoC20VSNn8r7q6WpFraoMALxOulA5pZPNEwgnEsAqiIAjPPKY2Ftt1595h1kNLZQyogLx5uhRIkADLDr20BP0VSeS/LB68W2MNolKiqUdJJeATiz5vm89J10M1L8rNvKtEI5prnnnFEIbxYZCElxxUwcglJ8SKAn6Kpt1y8ZRcWyCPsLhlLgen0CtRSkKEZJmATORIpJrlhcu3Bt2LZpSwu5T13lJGG3cS3MhtWZxAxFAXeioXk7ts3POoW2WnmV4HW8QUASApKkqEYkkGQYFQWxOWD1y8Gwm0SOdWgpVdEPQhSgVBvm88kyBOlAXeiqba8tsZufsoS2067bqKsrhLBUhw6dXrJHHJU0yu+Xdww026/atgPsqcZwPFU4Ww7hWC2CnqnUYoNAX+iqns/lmh9dmltH+YW6hwKMKZW00XCkiMzIjdkZq2UAUUUUAUUUUAUUUUAUUUUAUUUUBH7d2f0i3eYxYedbUjFE4cQImN+tVO9+jdkpWllYaDjKWnPs8UlK0rDiSVSgkpgiYOXCr5RQFOueSjhTicu0IU0Q4042whrm1JBlSusQtJSSCDTVRavLS7Zc2qy9iSApSQ0lLASR1sIVOsZlUTERUzy72e6/ZrbaTjOJtRbmOcShaVLbntANVzbyxdcwpnZz+FhxtbqVsJbxtpJBZSFEc4QSFYRKTh10oB64LdalXtltFlmEIaeV9m42Qk4WyoFQwKkwDPZXL+zl2r5cO1W23LhLaTzrTRLhbGEEdZI1XuG8a1B8rrNy9Up63tHkNpaQ25iaU2p4qfZISEekQgJUrFFLXXJN9VymzcCl2qbe4Sw9BJQF4ChCz6yFIEHeI4ZAS2ztlJ2ZzSXr+3S2CogOMtoUsEkqAWVzqryypS5Y2ff3QdVeochIaZbZfLZSoypfWacClFQGnBO+qxtGwvbq3Vc3DDoeaNuw2kIKlfZuJW+8ExniMZ6QmNKe32znL1y2aUbpQDrhU6u26OWvsVFtQwpAMLSDJ3kCgJGw5NWls+tDty2trm1sC3XEoS8rnwgqKpV6KiMpjPdUXsuws2FJVbbXtwpsPZq5tw4HVIPW640wpGLfO6mlxsy/VcKL7KlOB9kFaEKKXAi2fRzggRnKZ4FUZUk4xcnZirbDdqXzLaQybPClJS42ow4EYlQEkZnOaAvtiLXZwUq4u0c7cKLi3XloQXCAlPVGQCUjCABpNVzZWzm1FbFrtW2Kll1QCWW1uDnMSlQrnMWQJzpbZ2wrhjaNs0tJdtWm3+ZcInAlwI+yWdJSUwknUHsgMNiMO231Y6u2fhtN6HAhlalJxrGDEAJE7p3UA+veSVgLZDzF3zSWwpHPKeW63hWlTLiAlbmBGImITGYrtjkDbOMpVavIActiy44lAWHZAHOp63UViBmCQQY7a8tNkc7fFYbfTaKQbvmltlI6SSpoyD96Bjw8SDVm5GW/N2Nu3C04WwIcRzap34kycJnOJNAQnKDkaouJu7Vzm7pttSRATDi+aLSFnFkkgKMmDl3Vc2wQACZMCTpJ3nspSigCiiigCiiigCqttjlm01KW0lwjUzhHgYM+VO+WN4W7chJgqyB7sz8I8aojmyiGOkKIwyAEGRj6wHZlrmDuNCj2ltCrCp0NBZpb0nyXf48dVZE9a/SKjFDrJSOKVYo8CBVzs7pDqEuNqCkKEgjf8ArhWc7bQpTD4uFoQUBC2EgCMJxJUlEbiYGsymSK4+izaSg8u3J6i0lQHBSYB80n/iKG3DYqrGqqVV3vo7JO+eqXZ4WNRooooW4UUUUAUUUUAUVHP7TSFFCEqdWNUojqz6ylEJTxgmeygXT41tzHY4knyMD30MN9fom/REjRTa0u0OA4TmMiCCCDwIOYpzQyTTV0FFFFCQooooAooooAooooAooooAooooCA5Y2hctyUiSjPw0Pz8Ko20L9DhQopKVpwiScSYSAkHDEjTODBz41rBqp7Y5FtukqbVzZOojEPDQilik2lgK059LRs72TT/t0afNaarLQrV7s9surecuG3m8CpOKCCUEpABJJhREAE1x9FuzVKfXcEdRCCAeKlbvBIM94qST9HCjOK4AyywonPtk1OckeTS7LGC/jSrPAEwAfWzJMxlUjDYar00Zzp7qTb+8nm+ed/Us1FFFQXYUUUUAUw2u8pKAlBhxxQQg8CrVXbhSFKj+Gn9R+1DCmVnRLon/AHpW2P8AkpNDCo7RIbbShbJS205zRUkiVEn1iV65uFREqM61X9t7evFNt9GuWkOJgLKoIV1QFH0CB1tBHb2VJ/SYmENLyGakz3hJ/lVT2m+1g6i0kJPVhKgVDiZETqf93YBTPzv+XZ1FFjcXiKNWcYWskrLq15rTPPsVsy+bGtXEWzbpdW86OsVKIUVBR6zcgAKCfumBoDvNWYGod98W1kV5Dm2Z/wBwTl4kx51lrXL7aEftR/8AG38qFnUxMMPbpL3aV7c1q9ePyNfZvUqWUAGRizyjqnCd/H9aU8rFxy82h+Kn2G/lU7yR5b3Dj6GbjCtLhwhQSElKj6OmRBOWm+hhDadCclFXz+uZe7y/UgkBlxcCeqNewbp/XCRy+UP/AArPdnvI/lPiK8uW5WerrGeKDu3frTtrwJI+7n/qeO89g99CwBG0Ccyy4BJExu6vWjUjraa9U0I2iox9i4MwMxpMTPYJ1E6VzzR0CN2fX0gEAa6QAaIjRBOUHrjhmMz30B0NoqJIDDmRVmRAOGcx3xlSlvdlSsPNrSI1IMSAkx7yP9ppHmcyMB7+c3x+hXZbJnqTmf8Ayb+PZqfKgJA0Ug0pWhRAjjOkfrwrq2VIoBWiiigCiiigCs5+kzl2u0ULa2KeeIlxZAVzYPogA5YjrnoIyzFW7lXtcWdo9cQCUJ6oO9aiEoHdiIrG+TnJYXrLt2+6tS1KUYSRJUDKirqnM7gBw45LqKvLQyhBydkIbJ+kbaLLgUp4vJnrIWEwRvggSkxwy7DW77K2g3cMtvtmUOJCh47jwIORHEVnmyeSNtbK6qFLUtKgVrVOAFMEABIGckcdaafRXfKtbx/Zi1haespBGmNIGIDPLEkyRuKDxqFUjUvu8DOpSlBJs1qiigmpNQE01KQ8hSVJISZSQrKRpOR36g0oBizOm4ce0/KlqENXyZXNtbOU+zzDs+kkpdCcWhylIggxkSOqe4kVG7ctdmJhJU00pC0qWAjEpQGZQQnPOR/MGrrTddo2dUJ9kUNLpcrPtV/1Ms5Y8plXkNNApYBkzqojSRuA3DxqvW7RSQoaggjwraXm7dGSy2k8CUg+VesNsLnAW1RrhKTHfGlL52K2vsjEVpdJKp/1dvWxkovXM9BMjKd/CTl4eM052EkqvWlq1LqSfaFax0Bv1R5CvRYtj7o8hQ1LZFXejKVa9mnpy/5HlyyokwlBy+9P8qSVaqMEobynKVcDFOejCjowoXwgi2OikNxMmJ7YpwLRA0SK86MKOjCgDobfqj9GaUbaSnQRSfRhR0UUBzc3EdVOaj7qVt0YUgUNsJGgpSgCiiigCmdxd4FJThJCplUiExx3+6nlQ+0XJcAB0Hv1Puil0tV9MbrknZ2tn4DPlhbtXdu5aqJ60dYfdUkhST2wQMt+lZ1yfbudmultxha7VSv2qEFcKIQMRwzCeqcjmJ31qLFqgBTq8wJy/WtR7l2smcRHYCQB2ZVxY7GU8OlCavfgurK/sdGFhOfxRyIrlLtNTbZ5plbjrkpbQ22owY9Ix6IGsmofkTyfWzc9OuUw8Qr7MEdVSpSVZEz1IETvV2VaudI0JHcY+FPrFwO/ZuZmOqrf3TXPhsfRdXo1q/8AVzvnbmjfiKU9260XAkHNoJCCtIK/4RE9up8aVaVjzIgeqdZ1zqHcty3iEznr2VJ2y+olfAQruGvlr58atZOzt3lfFNpyvle3ePaKK5JjM0JOqZXCipXNpMZStQ1AMgAdpg57gO6llXIlIEnEYkCQMicz4UjYnrPcecj/AOtuPcahmceL5A44zbIxKKW0yJJ3k6SdSTSOFm6bS4g4gfQcTKVDtSrUfA1Vdt7Q6RcutkkW9sAF4SAVOKBjXWDA7IPGveRLyWVIbbKzbvJxNc4UkhQHWHV0zBGg3ZVhv524Hd+5tUuku9/Xqta9r/1btpW/pvctGzLpeJbDplxsA4gI5xCpCVxoDIUCOInQipFxwJEqIA4kxUVtnaTbC21KTKlBQBETAwkiTumKZPcpmVCChzwIHwNS5xWTZzxw1aqt+Ecn9MsTawrQgwYy416pUCSQBVaa5UMoEBtcTOoPxNTDN23cNKUmCkggg92YPDWpUk9DGphqtJXnFpDrnk+snjqNNJrzpCPXT5jdmd/Colm2QAQltrOAM1EGDOnEKCcq66IiTCGj6WqlEwRCp7wc++sjQSirhA1WkeI7e3sPlQbhHrp8x2DjxI86jBboxYkpb78SuBMcIzVluk0G0R1eq3KZw9dWQVqB2GDQEkLpETjRHHEOE8eFLZ1CuMoVkUt5fxqggJKRoeEipdtYOUiQMwDpQHqVg99d0x2g5gKF8ThPjJHw99LdIoBV1eEE8AT5VVluEkmcyZqx7R/ZL7qrRqt2tf8Adm07Wa88vmdOE/mWfIlNo3MsoA1UAT4a+/4VEoUCJFDZMkHQHq90A/EmuLX0E/lHwqgxVd15775JeWfncsKMNxbq6xWvWH8KwRqmD4Gfka8pIemfyj3FXzrni2ndarPwNks8mTG2XuskA5YZ750+FJ8nruVuN8CCPECf12VHIUTrOsCeAyHw99NOR15ju3gNBj9yiB8Kv8DiJVsVOXBrLN5aacODWnE5KmG/h3/bnwzztn437Ui5tpJGsAEiB2GNTJpQMp1jPicz76Gd/wCY0pV0VoVE3iiw5z0EtqADsCSnDOFyBmRBhXYEnQGpaihMXZlQf5PuF9d1aPICX09cHMKkDrJIBBBge/POvNl7JdYV0m+fbUW04U4ckgRA+6OJyAzmp1zZLYS5zcslwypTUJJPHQiTvMTVZ2jyRLipU8+uNMa8Ud0jKtbjxS88jthid5bs5WVrX3U5W5X8tdCC29t7pD2MSEJGFAPDeo8CflTRm9RnjJ0yjjU9/gcesvzH9NeHkKPWc80/01qdOTdy0hj8JCChG6XZ+ZXrm9bjqT4/+4irh9HTpW28Ad6Y7JBqPPIMes55p/pqX5P7GdtAsNZ4yCceekgREcazhCSldmjGY6hUoOnBu+Wq6yxdHVAjBrn1d3z7f/VcdHXr1N33e0zu4ZU36RdcEeyr+qjpF1wR7Kv6q3FISYZT6o8hRzKfVHkKjOkXXBHsq/qo6RdcEeyr+qgJLo6PVT5CuktJBJAAJ1y1qL6RdcEeyr+quHF3SspSntSM/eTQHm2bjE4hpOZBxK7MoA9591O+ZNJ7N2WEZnM8ak4oBO4bxJUniCKrtuxjOGYVuniN364VZ6hNqWxQrnE6Ez3GsKlONSDhJZMyjJxd0JfVbmZVAABOs6CmCRAAqcF8FtL3LCFZeBzFYCjltfwPt934bf8ATVPX2M5WVBpc95vu0VsuxHZTxmu/5Gx0va2fOFUekBl256VjT3LDaKIxOFOJIUmWkCUq0UJTmDuNXv6J+UbrxulXLowNoaMkIQEyXMRJAHqjWsKWxakZp1GnHjZu/dkuJlUxkXH4dS0Xlstptbi+qEjiDJ0AHeYqN+j3ZXNl14qKpAzI7ye/U0z2jtz6xcDNvJbSrhBUdMZHq8P1F32dYhpCWxugqPE8P1/OurC4Xoa8lFNJZO+rflkk/wBTKrXawyTavPOy4RXPrb6xyjGBonjGkTmeM11z3EEd4/mJFK0VaFacJWDoQfGkbh/DAAlR0HdqTwA412thJUlRHWTmDwkEfAnzpFs9dxZ3QkdgCQo+8nyFYTvklxMo8z3mCc1OK7knCB5Z+ZrlTCxmhRP8KzIPj6Q78+6oTm03rmMLOBIwqQciAQcxBIMnf2UrsZAt1lpbqSVEYUJkx2nIQTkO2uCOITmvh+Bu2/veHc3la7z1XA65UHGLW98SV3Hd8e9a6acSZtnwsaQQYUk6pPD4HtBp1FMXsDbgWVBOJOGCQAcJkHPeJPnRc3QIhDqAfzJ/v8K7oytlJq5yON84ofRRFMbW5ABC3UEyY6ydDoN1O1nIkcN1Zpp6ENNao7iiKhTz0ftzI1hsZ65j3d8dtdhx0YCXSRImG4kZ+X9hxqSCXiiKhDz8ftzpMltPCcvhGfvofW6CYeVEzHNpMAqMDiYED39wE3FEVCuF6DD5BJn9mCAFDIRvgg6neKd2K1AwtZUVQUykCNZ07v1oAH9Fckwe+uqAK5WkEQRINdUUBB32yDBwZgzlvE8ONZ1dfRmwD1XHkdisJj/iDWw14ROtSnYGS7S5EIfLRW6sc0y2yMOHMNggKMg5mahtgfR3erKgv7JrFmSZxYScKgkGDqYnMTW4htI0A8hXdZwqyhoQ431IDk7yeatEYWhBPpLPpK+X6gVMeh+X4f2/XcvRWDbbuwlbQKKQ9D8v/X+3wpeoJCmJjGpCvRcEjtOHCpPsgHz4U+pF9lKxhUJH6gg7j21hOLdmtUZRdtfr6ZX9lW77DnNBsc3iPWjURlnu0FcbPtX3nkuPICQjfETBJAyOcGpvC6hJghz1QrqnxUMj5VEbRVfLGFOBsHXColXmRl4Cq6WGjCKXxySd1Gyt1LRZK11nc7lXc5N/Cm1ZyvZ9bzfG+eVuQy5T7QC3ktpMhuZP8RiR4Ae80x5o8eHvn5V03yeeHq+f9q9OwLj+Hz/tVLXwmIr1ZValJu/kWNOdCnBQjVWXYIlBjd7/AJZVZOTDisC0EyBBHZiBy91QH+H7jgnz/tU5yatFsBznB6RTEZ6TPxrq2bhKlHEKXRuKs7vhp728DTjalOVFpTTeWXf7XH6ELAmHCcjCla56ZCvGw5nIc3D0hvSZI7junhT7pI4Hyo6SOB8q9IUgxcaUFD9qe5eWY/t7/CjAreHM9OtpGKN2WtPukjgfKjpI4HyoBkUqjNLmugIz0PDTLspRhjFKiXE5nKcszPDtpz0kcD5V4q44JJ91AFyfRG+aVpBlok4la/CnNAFFFFAFFFFAFFFFAFFFFAFI2zCUDCnSSdScyZOtLVHbZdUEJQg4VurDaVerMlah2hCVkdoFSldg5d2mSooZbLqkmFGQlCDwUozn2JCiN8UF67GZZaI3hLyp8MTQB8SK7eULdoBtuQmEpSCBrpmeJgTxVVN2d9JgeeQyLUgrMTzo6oAJUTKRoAT4VshTlNNxje31zMXJLUulhtFLpUmFJWmMbaxCkzMZaEGDCgSDBzyp9FQ+0mVLbbuG0EPIAUlJgEpVBcZVnGYy1gKCTuqXSZrWzI9iiKYovwV4MKs1ETBIynUgdU5aHcQaf1APIoimFxfLSopDK1QRmND6M/E+zSatpLAB5hySJIyyzUI9w8DNAScURUYvaDg/8CzkM+/XdPmB4V4jaThMdHcGvuSD7yY8KAlIoio1O0HCJ5hY7D49nZuzzGVH1guY5lyMs4yHHt93kM6Akooig0CgCiiigCiiigCiiigCiiigCiiigCorbRwlh0+i28CrsC0LZnwLiffUrST7KVpUhYCkqBCgdCCIIqVkwdOICgQQCDkQcwaoWwre1O0HY2e+jFGBxbKggKTjLipJhOKEwRr2VaLdx9ghtaVPNyAl1JBUkbg4kkEx66ZneBqWm1eW9jblSFukrSYKUIWozwyET41nFSzUc78jF24klyhvxb2zzxMYEKI/MRCR4qIHjWNscsdoZAXKydwCUH/80ctOWTl8QhKS2wkyEn0lHcpUZZbkjTid1ctrlTagtIzGkirHDUN2Dc0r9ZpqTu8mWYcr9o7n3PYTxj1eII8KmuR3Li5Nw2y+vnEOqCZIAUkq9EggCQTGvGe+kJ2y8IiBGkIGUAgAGJ3nzPE065N3K3L+2UrUvMgmI0KUj3Cs6lOLi7xWj0MVJ31NsvbBtTiipAJVAJxxkACMtfuxlumkDstmSMAz0+0mRmRqcszOXHhUs4ySSer2ZZ6Rr4DwpNNsoepp6vdw3a5VTnUdG4UB6I8VDTLPXvr1Vyrgn2h40ku0VORRGX3dwnjNOujoOqRNAIm5VBySTOXWEfHu86OlK9UdnXGecfPypc26PVH6j5ChTCDqkUByw/iyMA8MQPjlXVsqU02cKBkgCeI3f3p0yiABQClFFFAFFFFAFFJurCc1EAdpik+mN+uj2h86EN21HFFIdMb9dHtJ+dHTG/XR7Q+dBvIXopv0xv8AER7Q+dHTWvxEe0PnQbyHFFN+mtfiI9pPzpRp1KhKSCOIIPwoLoUrlSAa8cWEgkkADMkmAKTRdNkpAWklQlICgcQGpHEUJPejJo6MmvFXbYiVoE5DrDMmQAOOYPlXQfQfvJ3bx970fPdUWQPOjpo6MmvOlN+unSfSGmZnu6p8jXDu0GUkpU62kjUFaQRv3nhU2Ap0VPCjoqeFLTTb6wa/FR7afnQHfRU8KOip4Vx09r8VHtp+defWDP4qPbT86EXFOip4UdFTwpP6wZ/FR7afnR9YM/jN+2n50FxdDQGgrukWLltfoLSr8qgfhS1CQooooAqs8peUBaJaajHGZ1wzu7asTzmFKlcAT5CsoedK1FSjJUTPeczRlHtzHzw1OMKeUpXz5Ja263e3ic3DylnEtWI8Zn40gU12aVs7Nx1WBtJUrs3dpOgFQeLUXUla12+9t+rGxFcEVakciXiJK0A8Mz/Kofa2xH7fNaer6wM+/d40Oyps3EUo786bS55fLTvIsiuSK6rk1JyqK5HJFabyD/yTfer/ALGs1QgqISkEkmAAJJNWvZPJm+Snqu8yDnhxEmeJCcqF1sZzp1nOFNyyay4Xa4uy4aXLttO0DzS2iSAtJTIjKe/Kom25MoS4XOcUSpxLixCBK0ThiEyhOeaRrv8ASVirm1bDaTAKg8taRqUrmO8GD8ar/wBf3f47nmr50LyttiNGW7UpST7vc0K55KtKW4sKUkuYwqAk9VwIxpTIOHrIKgRoXFnfXaOTaAytkOr6yW0oX1cTYZzZIygqSc5IMkVnJ2/d/jueavnXJ5QXf7w57SvnQ1/btH+iXl7l8XyIZhQS64kZhAGGGwoQUplOkSI4KVxp3bclmUYsKlQpLiRMHCHA0IB16oaATwBrOrfbN84oIQ84pRyAClEn31Z7bk/tRQlV0UHgVqJ8cOXvNDpo7T6b+XSk/D1vYvKUBKYAAAEAbgAKwACrht6w2mwhRcdWtqOsoLKhH8QMEDwiqgalFTtWv0soxlBxcb69dvY4IrkilDQhBUQlIJJMAASSeAA1oViiuQiRXJq5WX0fXbicSihudyjJ8kggedNNs8iLu3SVwlxI1KCSQOJSQD5TQ7P3GvGO86bt2fLUq6VEEEGCNCMiKvPJDl04haWblWJs5BxXpI4Yj95PacxVFNcmpFCvOjLeg/Zn0fRVe5B3pesWlKMqSCgn8iike4CrDWJ66E1OKkuKuN7/APZOflV8DWTitYv/ANk5+VXwNZOKHlP2m+/S7JeqPDV65pyyZTzaQokEuEhRMhOIDI5DUTuy41RsUEHgZrWV4XEHPqrTr2KHyNER+ztKMnVlf4kkl1Xvf0Xd2lC/x876qe7CqrTsK8VdMlTrYCVSBwUNDkSSM5rIlRqkhQk5gyK2DkimLNn8p96ia2zSSyLfA1Ks6jU29NH+hnm27HmH1N6hJyPGcx7jUcasHLZ8Kulgfdwg94SCfjHhVfNaUeTxlONOvOENE3bx+kXnkXYNtMqunIBMgE/dAlJjtJn3Uq7y1SD1WSR2qg+UZUpspnpGz0JSesJy/iCiYPeD7xVMt7Z5a8AbkqW6kDEMQU0evKfujgZ4cRNVj6mMUrUFkle6SfO+vLKyWefE9jhl0WHpxp6WT7W9WaFa7dC1pBTAUEx2Eidd+o3VTuXmyEsuhxAhLkmBoCmMXdMg+dP0XZbeDKm8wWmz1kYgtxAKcKYlSdJVOWfA139JDowMtk9aFE+4e8/CrVPJZPRa8+P6GvacN/CzdS2Ty8beZQq8NdGuDWR5E0/kHshLTAdI+0dEk8BuA79fHsqwvXASU4iAFkJSIMlRkx5CmvJ58LtWVJj0APFPVI8warfKh0vKaCAUlpwmVHgpPvke6tFavTpW6SVrnvKNKVPDJUI71kslrna79WXSMoOeW+M6yHlvsdNtcEIENrGJI4SSFJ8D7iK0jky6SylKiVKQAkq9aJj3VTvpUeBdZQNUpUT/ALlJj/qfOs6VSNSKlF5PQ5dsU/4duatJNdzeqKMa0f6NNjJDZulCVKJSj+EJyJHaTI7h2ms4Na/yAfSuxajVJUk9hxKPwIPjWxlVsiEZV7vgrokntqhJjAdARmNDXdptAOfdIzAnLfPypHadkMJWDEbt2ZpzZ2IbGpJ18arYfvbruMmt3Xhx06+DPXvoujuvvGYfSXsRLLyXmxCHpkDQKEYu6ZB75qlmtO+lu4TgZb+8SpXgAE/FXurMTVmjx+0IRhiJKPU+82L6MP8AIj/Uc/7VbaqX0Yf5Ef6jn/arbWJ6DC/yIf7V6De//ZOflV8DWTitbeaxJUn1gR5iKyhaCklJEEEyO0ZGjPN/tNF71KXD4vkJGrPyd5QpQjmX80QQFa5GZBHCqzUq30dZJDSt+QXpqR7hUFVs2pVp1d+lJJ6Wd813LqJ9jkxs3DKYI3kuqOggSSrcAB3AV1tHlCxbNBpghakiEgGQO3+Luqus2zeABbCypI6xGLjH8wK7Zt2YkNKWCCDBPZlGoiDuPYcqltl9LH1pr/LjCMpLN/Ffry3Vp3q5AuLKiVEySSSeJOZNJGpC/DWFOAQrPEM8tMs+2fCJqPNQjzNSG47XT7PrxJvk1t82yyCCW1ekBqDxHb2b6vdjeWiyXW1N41ABSskrIGgVMK86o7dqCkFVqpQgRhXmThSSSAZzBnPSRTYW4bWStlRQuAlMyc9ADOROWknPdrUnosJia+FioO0o9ammu/d0v25vIu+1ttWbKudVgW6kEJICSoA7sX3R41nG2NpLuXVOr1OQA0EaAfreamU2aD1uiKMFIkKVn1RBwznmJ7ZHHMdtmynKzXmVEQs5TugHQQcuw6a0GMnXxSs2lHWyU/Fvd/LkVavDTraP7RfVwCVQngJMDwpqakpHHdbRZOSPKfopLbklpRnLMoO8gbxxH6N8t7izdJcSptRIzkj3g6HwrLdiuJC8JaDpXACSQMyRvIy4btdakl2qEnrWKo7HDnvy1kwAcuJOkAYShGX3lcv9n42tSpWTutNJZdV1FqxcNocpLSzQUoKVqMkJSZk/xKzA+PZWX7RvVvuKdcMqUZPAcAOAAyqwvMDCgizghU5KmcJGIKndkcjpnuFQ22HkE4Us80oFWLrEyTEDsAz76yjFRW7FWRr2jWq1s5uy1StLO/W1m/lnzIw1O8keUirNwyCppcY0jUEaKHb2b6gjU1sJONCk9GD0ElRxAESkYQNCfRXv38YrI48I5KonB2fDJv0NNa2jaXQCkvJOWmIJInilWdIX/KO0s0Ec6FqzhCSFKJ4ZZJ8aojrYOX1f1gIHWOURmROfpJ14p9YUGzRgKugH0jILpEAHMDeOrlJ0KVHLStKoU1N1FFb3Piehe0K8obit4Tt4bvzIHbu1nLt5TrmROSUjRKRokeeu8k1GGpfbyEpKUhgsmCSCSSqTAPZocu3sqINbigrXU3vO74v9czYvow/yI/1HP+1W2q5yAsi1YtBWRVKvBRJT/wAYqx1ierw0XGjBPkvQKqfKfk8pwl5kSo+knj29/ZVsooYYrC08TTdOosvNPmjH1ggkEEEag5EV0xcqQZSog9g4EH4gVrFxaNr9NCVd4B+NIfU9v+EnyqLHn/8ADdWMt6FVdWTT8mZoNrPxGMx+X+1JDaDgThxGN+Qzmfma1D6nt/wk+VefU1v+CjyobfsPF/j/APr3MlcUSSTmSZPedaTNa99TW/4KPKj6lt/wUeVDX/hyr+IvB+5k6L5xOiiMgNDoBAHllXLm0HVarUYIImdRoe+ta+pbb8FHsivPqS2/BR7NSbVsHEJW6b19zJztJ7TnFe+uDtF7TnVeZ36/z8zWt/Udt+Cjyrz6jtvwUeVDL7ExH43r7mNOLJMkyeJpM1s/1JbfgN+yK8+pLb8Bv2RUmv7BqfiLw/MxhKiCCCQRoRlFOEbTeGjivMn41r/1HbfgN+yK6+obX8Bv2RUGUdjVY6VLdz9zG/rF6QedVIMiSTBiN/YSPGmz7ylqKlGVKMk8Sa236gtf3dv2RR9QWv7u37Ipcyex6jVnU8n7mGGu2rlaPRUpP5SRpPDvPnW3/wCH7T93a9gV5/h60/d2vYFTcmOxanCa8H7mLtbWfSQQ8rLSSSPI5UkNpPDRxYzJyKtSZJ1451tv+HbT93a9gUf4cs/3Zr2E/Klzd9kV/wAT19zCrh9SjKlFR4kk9u/tq1cj+RblwtLr6ShgZwrIudgGqU8TvGnEafa7It2zKGW0niEJnziaf0ubKOylCW9Ulfq+szwCMhXtFFQWx//Z'
        },
        {
            title: 'View Recycling Statistics',
            description: 'Track and view statistics on everything you’ve recycled.',
            image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/000/936/961/datas/original.png'
        },
        {
            title: 'Group Recycling Challenges',
            description: 'Challenge friends to recycling competitions and group recycling challenges.',
            image: 'https://cdn4.vectorstock.com/i/1000x1000/14/38/recycling-symbol-friends-together-eco-environment-vector-21681438.jpg'
        },
        {
            title: 'Recycling Streaks',
            description: 'Participate in recycling streaks and challenges every week.',
            image: 'https://www.propmodo.com/wp-content/uploads/2021/08/recyle-tenants-1155x770.gif'
        },
        {
            title: 'Partner with Local Businesses',
            description: 'Enjoy discounts and special offers from local businesses promoting sustainability.',
            image: 'https://asiasociety.org/sites/default/files/styles/1200w/public/0/0113-businesspartners.png'
        },
    ];

    return (
        <div className="main-page">
            <div>
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>Welcome to EcoCycle</h1>
                        <p>
                            EcoCycle is a groundbreaking mobile app concept that addresses the critical issue of plastic waste by
                            harnessing the power of technology and community engagement. We aim to create a sustainable future where
                            plastic recycling becomes second nature. By merging AI, blockchain, and gamification, EcoCycle aims to
                            inspire humans to make a tangible environmental impact.
                        </p>
                    </div>
                </section>
                <section className="details-section">
                    <h2>Why EcoCycle?</h2>
                    <p>
                        We're motivated by the urgent need to combat plastic pollution and promote sustainable practices. EcoCycle
                        aims to empower users to take active steps towards a cleaner planet. Our goal is to make recycling
                        impactful, fun, and rewarding.
                    </p>
                </section>
            </div>
            <a href="/signup" className="get-started-button">Get Started</a>
            <section className="features-section">
                <h2>Key Features</h2>
                <div className="feature-container">
                    {features.map((feature, index) => (
                        <div className="feature" key={index}>
                            <img
                                src={feature.image}
                                style={{ width: '150px' }}
                            />
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default MainPage;
