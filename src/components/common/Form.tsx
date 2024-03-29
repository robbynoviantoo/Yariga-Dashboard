import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button, width } from "@pankod/refine-mui"

import { FormProps } from "interfaces/common"

import CustomButton from "./CustomButton"

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={24} fontWeight={700} color="#11142D">{type} a Property</Typography>

      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC">
        <form style={{ 
            marginTop: '20px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
          onSubmit={handleSubmit(onFinishHandler)}
          >
            <FormControl>
              <FormHelperText sx={{
                  fontWeight: '500',
                  margin: '10px 0',
                  fontSize: '16px',
                  color: '#11142D',
                }}>Enter Property Name</FormHelperText>
              <TextField
                fullWidth
                required
                id="outline-basic"
                color="info"
                variant="outlined"
                {...register('title', { required: true })}
              />
            </FormControl>
            <FormControl>
              <FormHelperText sx={{
                  fontWeight: '500',
                  margin: '10px 0',
                  fontSize: '16px',
                  color: '#11142D',
              }}>Description
              </FormHelperText>
              <TextareaAutosize
                minRows={5}
                required
                placeholder="Write description"
                color="info"
                style={{ 
                  width: '100%',
                  backgroundColor: 'transparent',
                  fontSize: '16px',
                  borderColor: 'rgb(0,0,0,0.23)',
                  borderRadius: 6,
                  padding: '10px',
                  color: '#919191'
                }}
                {...register('description', { required: true })}
              />
            </FormControl>
            <Stack direction="row" gap={4}>
              <FormControl sx={{flex: 1}}>
                <FormHelperText sx={{
                  fontWeight: '500',
                  margin: '10px 0',
                  fontSize: '16px',
                  color: '#11142D',
                }}
                >Select Property Type
                </FormHelperText>
                <Select
                  variant="outlined"
                  color="info"
                  displayEmpty
                  required
                  inputProps={{ 'aria-label': 'Without label' }}
                  defaultValue="apartment"
                  {...register('propertyType', { required: true })}
                >
                  <MenuItem value="apartment">Appartment</MenuItem>
                  <MenuItem value="villa">Villa</MenuItem>
                  <MenuItem value="farmhouse">Farm House</MenuItem>
                  <MenuItem value="condos">Condos</MenuItem>
                  <MenuItem value="townhouse">Town House</MenuItem>
                  <MenuItem value="duplex">Duplex</MenuItem>
                  <MenuItem value="studio">Studio</MenuItem>
                  <MenuItem value="chalet">Chalet</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
              <FormHelperText sx={{
                  fontWeight: '500',
                  margin: '10px 0',
                  fontSize: '16px',
                  color: '#11142D',
                }}>Enter Property Price</FormHelperText>
              <TextField
                fullWidth
                required
                id="outline-basic"
                color="info"
                type="number"
                variant="outlined"
                {...register('price', { required: true })}
              />
            </FormControl>
            </Stack>
            <FormControl>
              <FormHelperText sx={{
                  fontWeight: '500',
                  margin: '10px 0',
                  fontSize: '16px',
                  color: '#11142D',
                }}>Enter Location</FormHelperText>
              <TextField
                fullWidth
                required
                id="outline-basic"
                color="info"
                variant="outlined"
                {...register('location', { required: true })}
              />
            </FormControl>
            <Stack direction="column" gap={1} justifyContent="center" mb={2}>
              <Stack direction="row" gap={2}>
                <Typography color="#11142D" fontSize={16} fontWeight={500} my="10px">Property Photo</Typography>
                <Button component="label"
                sx={{
                  width: 'fit-content',
                  color: '#2ED480',
                  textTransform: 'capitalize',
                  fontSize: '16px',
                }}
                >
                  Upload *
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => { // @ts-ignore
                      handleImageChange(e.target.files[0])}}
                  />
                </Button>
              </Stack>
              <Typography fontSize={14} color="#808191" sx={{
                wordBreak: 'break-all',
              }}
              >
                {propertyImage?.name}
              </Typography>
            </Stack>

            <CustomButton 
              type="submit"
              title={formLoading? 'Submitting...' : 'Submit'}
              backgroundColor="#475be8"
              color="#FCFCFC"
            />
        </form>
      </Box>
    </Box>
  )
}

export default Form