package airbnb.auth;

import io.netty.resolver.DefaultAddressResolverGroup;
import org.springframework.stereotype.Component;
import reactor.netty.http.client.HttpClient;


@Component
public class DnsResolutionFixer {
    public HttpClient customize(HttpClient httpClient) {
        return httpClient.resolver(DefaultAddressResolverGroup.INSTANCE);
    }
}
