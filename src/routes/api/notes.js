import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ msg: 'Get All The Notes' })
})

router.post('/', (req, res) => {
  res.json({ msg: 'Create a Note' })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({ msg: `Getting note ${id}` })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  res.json({ msg: `Updating Note ${id}` })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({ msg: `Deleting Note ${id}` })
})

export default router
