import React, {useEffect, useState} from 'react'
import {getUsers,showMoreUsers} from "redux/actions/getUsers";
import {useDispatch, useSelector} from "react-redux";
import Button from "components/common/Button/Button";
import UserItem from "components/pages/Home/Users/UserItem";

export default function Users() {

    const [getAllUsersItems, setAllUsersItems] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [showButtonLoadMore, setShowButtonLoadMore] = useState(true)

    const dispatch = useDispatch();

    const usersData = useSelector(state => state.users.users);
    const spinnerLoading = useSelector(state => state.users.spinnerLoading);

    const ShowMoreUsers = () => {

        setCurrentPage(currentPage + 1)

        dispatch(showMoreUsers({
            page: currentPage + 1,
        }));
    };

    useEffect(() => {
        dispatch(getUsers({
            page: currentPage,
        }));
    }, []);

    useEffect(() => {
        setAllUsersItems(usersData)
    }, [usersData]);


    useEffect(() => {
        if(usersData.total_pages === currentPage){
            setShowButtonLoadMore(false)
        }
    }, [currentPage]);

    return (
        <section className={'get-users'} id={'users'}>

            <div className={'get-users-wrap'}>
                <h2 className={'section-title'}>Working with GET request</h2>

                {
                    getAllUsersItems && Object.keys(getAllUsersItems).length !== 0 ?

                        <div className={'users-group'}>

                            <UserItem allUsers={getAllUsersItems}/>

                            {
                                showButtonLoadMore &&

                                <div className="show-more-users">
                                    <Button
                                        type="button"
                                        className="button button--yellow"
                                        onClick={() => ShowMoreUsers()}
                                        isLoading={spinnerLoading}
                                    >
                                        Show more
                                    </Button>
                                </div>
                            }

                        </div>
                        :
                        <div className={'no-user-items'}>
                            <h2>no Users</h2>
                        </div>
                }

            </div>
        </section>

    )
}