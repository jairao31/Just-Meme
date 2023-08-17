import React from "react";
import { Box, HStack, Heading, Image, Link, Text } from "@chakra-ui/react";

const Meme = ({ memeData }) => {
    const { postLink, subreddit, title, url, nsfw, spoiler, author } = memeData;

    return (
        <Box
            maxW="600px"
            mx="auto"
            p={4}
            borderWidth={1}
            borderRadius="md"
            shadow="xl"
            rounded="xl"
        >
            <Text fontSize="2xl">{title}</Text>
            <Text fontSize="xs" mb={2}>
                Posted by {author} in {subreddit}
            </Text>
            <Box
                borderWidth={1}
                borderRadius="md"
                width={"100%"}
                p={5}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Image src={url} alt={title} mb={4} />
            </Box>
            <HStack justifyContent={"space-between"} pt={3}>
                <Text>
                    NSFW: {nsfw ? "Yes" : "No"} | Spoiler:{" "}
                    {spoiler ? "Yes" : "No"}
                </Text>
                <Link
                    href={postLink}
                    color="blue.500"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on Reddit
                </Link>
            </HStack>
        </Box>
    );
};

export default Meme;
