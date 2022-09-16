import {useState, useEffect,useCallback} from 'react';
import Api from '../../utils/Api';
import {debounce} from 'lodash';

export default ()=>{
    const [page, setpage] = useState(1);
    const [user, setuser] = useState([]);
    const [error, seterror] = useState('');

    const fetchData = async searchTerm => {
      try {
        const response = await Api.get('/search', {
          params: {
            limit: 50,
            location: 'san jose',
            term: searchTerm,
          },
        });
        console.log('response is here..', response.data.businesses);
        const res = response.data.businesses;
        console.log(res)
        setuser(res);
      } catch (error) {
        console.log('Data fetching cancelled');
        seterror('Data fetching cancelled');
      }
    };
    const handler = useCallback(
      debounce(text => fetchData(text), 500),
      [],
    );
    useEffect(() => {
      fetchData();
    }, []);
   return [user,error,fetchData]
};