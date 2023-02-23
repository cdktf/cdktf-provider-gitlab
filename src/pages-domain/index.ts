// https://www.terraform.io/docs/providers/gitlab/r/pages_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PagesDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables [automatic generation](https://docs.gitlab.com/ee/user/project/pages/custom_domains_ssl_tls_certification/lets_encrypt_integration.html) of SSL certificates issued by Let’s Encrypt for custom domains. When this is set to "true", certificate can't be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/pages_domain#auto_ssl_enabled PagesDomain#auto_ssl_enabled}
  */
  readonly autoSslEnabled?: boolean | cdktf.IResolvable;
  /**
  * The certificate in PEM format with intermediates following in most specific to least specific order.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/pages_domain#certificate PagesDomain#certificate}
  */
  readonly certificate?: string;
  /**
  * The custom domain indicated by the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/pages_domain#domain PagesDomain#domain}
  */
  readonly domain: string;
  /**
  * Whether the certificate is expired.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/pages_domain#expired PagesDomain#expired}
  */
  readonly expired?: boolean | cdktf.IResolvable;
  /**
  * The certificate key in PEM format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/pages_domain#key PagesDomain#key}
  */
  readonly key?: string;
  /**
  * The ID or [URL-encoded path of the project](https://docs.gitlab.com/ee/api/index.html#namespaced-path-encoding) owned by the authenticated user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/pages_domain#project PagesDomain#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/pages_domain gitlab_pages_domain}
*/
export class PagesDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_pages_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/pages_domain gitlab_pages_domain} Resource
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
        providerVersion: '15.9.0',
        providerVersionConstraint: '~> 15.7'
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
}