// https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/pages_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PagesDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables [automatic generation](https://docs.gitlab.com/ee/user/project/pages/custom_domains_ssl_tls_certification/lets_encrypt_integration.html) of SSL certificates issued by Let’s Encrypt for custom domains. When this is set to "true", certificate can't be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/pages_domain#auto_ssl_enabled PagesDomain#auto_ssl_enabled}
  */
  readonly autoSslEnabled?: boolean | cdktf.IResolvable;
  /**
  * The certificate in PEM format with intermediates following in most specific to least specific order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/pages_domain#certificate PagesDomain#certificate}
  */
  readonly certificate?: string;
  /**
  * The custom domain indicated by the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/pages_domain#domain PagesDomain#domain}
  */
  readonly domain: string;
  /**
  * Whether the certificate is expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/pages_domain#expired PagesDomain#expired}
  */
  readonly expired?: boolean | cdktf.IResolvable;
  /**
  * The certificate key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/pages_domain#key PagesDomain#key}
  */
  readonly key?: string;
  /**
  * The ID or [URL-encoded path of the project](https://docs.gitlab.com/ee/api/index.html#namespaced-path-encoding) owned by the authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/pages_domain#project PagesDomain#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/pages_domain gitlab_pages_domain}
*/
export class PagesDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_pages_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PagesDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PagesDomain to import
  * @param importFromId The id of the existing PagesDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/pages_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PagesDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_pages_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/pages_domain gitlab_pages_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PagesDomainConfig
  */
  public constructor(scope: Construct, id: string, config: PagesDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_pages_domain',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.11.0',
        providerVersionConstraint: '~> 16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoSslEnabled = config.autoSslEnabled;
    this._certificate = config.certificate;
    this._domain = config.domain;
    this._expired = config.expired;
    this._key = config.key;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_ssl_enabled - computed: true, optional: true, required: false
  private _autoSslEnabled?: boolean | cdktf.IResolvable; 
  public get autoSslEnabled() {
    return this.getBooleanAttribute('auto_ssl_enabled');
  }
  public set autoSslEnabled(value: boolean | cdktf.IResolvable) {
    this._autoSslEnabled = value;
  }
  public resetAutoSslEnabled() {
    this._autoSslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSslEnabledInput() {
    return this._autoSslEnabled;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // expired - computed: true, optional: true, required: false
  private _expired?: boolean | cdktf.IResolvable; 
  public get expired() {
    return this.getBooleanAttribute('expired');
  }
  public set expired(value: boolean | cdktf.IResolvable) {
    this._expired = value;
  }
  public resetExpired() {
    this._expired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredInput() {
    return this._expired;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // verification_code - computed: true, optional: false, required: false
  public get verificationCode() {
    return this.getStringAttribute('verification_code');
  }

  // verified - computed: true, optional: false, required: false
  public get verified() {
    return this.getBooleanAttribute('verified');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_ssl_enabled: cdktf.booleanToTerraform(this._autoSslEnabled),
      certificate: cdktf.stringToTerraform(this._certificate),
      domain: cdktf.stringToTerraform(this._domain),
      expired: cdktf.booleanToTerraform(this._expired),
      key: cdktf.stringToTerraform(this._key),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_ssl_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoSslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expired: {
        value: cdktf.booleanToHclTerraform(this._expired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
