import { useEffect, useState, useCallback } from 'react'
import { Button } from './Button/Button'
import { Modal } from './Modal/Modal'
import { styled } from 'styled-components'
import { useInput } from '../hooks/useInput'

const EffectSec = () => {
  const input = useInput()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <section>
      <h3>Effects</h3>

      <Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>
        Открыть информацию
      </Button>

      <Modal open={modal}>
        <h3>Hello Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rerum doloremque architecto laboriosam
          voluptate, numquam, excepturi fugit quae exercitationem nobis quaerat sapiente laborum labore asperiores culpa
          recusandae commodi corporis fugiat.
        </p>
        <Button onClick={() => setModal(false)}>Закрыть</Button>
      </Modal>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <input type='text' className='control' {...input} />
          <ul>
            {users
              .filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase()))
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  )
}

export { EffectSec }
