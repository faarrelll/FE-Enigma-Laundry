
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import Customer from '../../interface/customer.interface'
import Button from '../../components/ui/Button'
import { useNavigate } from 'react-router'
import { CustomerApi } from '../../api/CustomerApi'

const schema = z.object({
    name: z.string().min(5),
    phoneNumber: z.string().min(8).regex(/^\d{10,15}$/),
    address: z.string().min(10)
})

type Schema = z.infer<typeof schema>

export default function CreateCustomer() {
    const navigate = useNavigate()

    const { register, handleSubmit, setValue } = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            phoneNumber: "",
            address: ""
        }
    })

    const handleSubmitForm = async (data: Customer) => {
        try {
            const response = await CustomerApi.create(data)
            if(response) {
                await alert('oke')
                navigate('/customers')
            }
        } catch(error) {
            alert(error)
        }
    }

    const handleClear = () => {
        setValue('name', '')
        setValue('phoneNumber', '')
        setValue('address', '')
    }

    return (
        <div className="w-full h-[80vh] flex justify-center items-center flex-col">
            <h1 className='text-3xl font-bold mb-10 text-secondary-800'>Create Customer</h1>

            <div className="bg-white p-5 rounded-lg">
                <form onSubmit={handleSubmit(handleSubmitForm)} className='flex flex-col gap-5'>
                    <div className='flex flex-col justify-start gap-1'>
                        <label htmlFor="name" className='text-xl ms-1'>Name</label>
                        <input {...register('name')} className='border border-primary-200 rounded-md p-1 px-3 text-lg w-[400px]' autoComplete='off' placeholder='Enter Name'/>
                    </div>
                    <div className='flex flex-col justify-start gap-1'>
                        <label htmlFor="phoneNumber" className='text-xl ms-1'>Phone Number</label>
                        <input {...register('phoneNumber')} className='border border-primary-200 rounded-md p-1 px-3 text-lg w-[400px]' autoComplete='off' placeholder='Enter Phone Number'/>
                    </div>
                    <div className='flex flex-col justify-start gap-1'>
                        <label htmlFor="address" className='text-xl ms-1'>Address</label>
                        <textarea {...register('address')} className='border border-primary-200 rounded-md p-1 px-3 text-lg w-[400px]' autoComplete='off' placeholder='Enter Address' rows={4}/>
                    </div>

                    <div className='flex justify-between'>
                        <Button variant='danger' onClick={() => navigate('/customers')}>Back</Button>
                        <div className='flex justify-end gap-2'>
                            <Button variant='secondary' onClick={handleClear}>Clear</Button>
                            <Button buttonType='submit'>Submit</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}