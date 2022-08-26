
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRegObjectGroup, FaTruck } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { addProductCart } from "../../Redux/products/action";
import { Phone } from "../CellPhone/Cellphone";
import styles from "../../Style/card.module.css"

export const Card = ({
 
      id,
  image,
  desc,
  model,
  rate,
  count,
  pickup,
  shipping,
  price,
  saving,
  print,
  offer,
}) => {


  return (
    
    <Box className={styles.classMain}>
    <Flex w={"100%"} py={4}>
      <Text>{id}</Text>
      <Stack>
      <Flex>
        <Flex flex={1}>
         <Box className={styles.class1}>
          <Image boxSize='300px' src={image} />
          </Box>
        </Flex>
        <Box className={styles.class2} >
        <Stack flex={1} flexDirection="column" p={1} pt={2}>
          <Text>Sponsered</Text>

          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {desc}
          </Text>
          <Text>{count}</Text>
          <Flex
            justifyContent={"space-around"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            <Box>
              <span>Model: </span> {model}
            </Box>
            {/* <Box>
              <span>SKU: </span> {uniqueid}
            </Box> */}
          </Flex>
          <Stack direction={"column"} mt={6}>
            <Heading fontSize={"20px"} color="green">
              Get it today
            </Heading>
            <Box>
              <Flex display={"flex"} alignItems={"center"}>
                <Text fontSize="2xl" marginRight={"5px"}>
                  {" "}
                  <FaRegObjectGroup />{" "}
                </Text>
                <Heading fontSize={"16px"}>Pickup:</Heading> {pickup}
              </Flex>
              <Text color={"gray.400"}>
                Act Fast - Only few left at your store!
              </Text>
              <NavLink to="#">See all pickup locations</NavLink>
            </Box>
            <Box >
              <Flex alignItems={"center"}>
                <Text fontSize="2xl" marginRight={"5px"}>
                  <FaTruck />
                </Text>
                <Heading fontSize={"16px"}>Shipping: </Heading> {shipping}
              </Flex>
              <Text color={"gray.400"}>
                This item is only available in certain markets.
              </Text>
              <NavLink to="#">Estimate for 969339</NavLink>
            </Box>
          </Stack>
        </Stack>
        </Box>
        <Box className={styles.class3} >
        <Stack flex={1} flexDirection="column" p={1} pt={2}>
          <Heading>${price}</Heading>
          <Text>with activation today</Text>
          <Flex display={"flex"}>
            <Button h={"30px"} bg={"maroon"} color="white" fontWeight={500}>
              Save ${saving}
            </Button>{" "}
            <Text>Was ${print}</Text>
          </Flex>
          <Text fontWeight={500}>{offer}</Text>
          <Button 
           rounded={'none'}
           w={'full'}
           mt={8}
           size={'lg'}
           py={'7'}
           bg={useColorModeValue('yellow', 'orange.900')}
           color={useColorModeValue('white', 'white.500')}
           textTransform={'uppercase'}
           _hover={{
             transform: 'translateY(2px)',
             boxShadow: 'lg',
           }} 
          //  onClick={()=>addToCartHandler(Phone)}
           >
            {" "}
            ADD TO CART
          </Button>
          
        </Stack>
        </Box>
        </Flex>
      </Stack>
      
    </Flex>
    </Box>
  );
 
};
