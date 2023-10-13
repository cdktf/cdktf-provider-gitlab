// https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/system_hook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemHookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Do SSL verification when triggering the hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/system_hook#enable_ssl_verification SystemHook#enable_ssl_verification}
  */
  readonly enableSslVerification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/system_hook#id SystemHook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Trigger hook on merge requests events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/system_hook#merge_requests_events SystemHook#merge_requests_events}
  */
  readonly mergeRequestsEvents?: boolean | cdktf.IResolvable;
  /**
  * When true, the hook fires on push events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/system_hook#push_events SystemHook#push_events}
  */
  readonly pushEvents?: boolean | cdktf.IResolvable;
  /**
  * Trigger hook on repository update events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/system_hook#repository_update_events SystemHook#repository_update_events}
  */
  readonly repositoryUpdateEvents?: boolean | cdktf.IResolvable;
  /**
  * When true, the hook fires on new tags being pushed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/system_hook#tag_push_events SystemHook#tag_push_events}
  */
  readonly tagPushEvents?: boolean | cdktf.IResolvable;
  /**
  * Secret token to validate received payloads; this isn’t returned in the response. This attribute is not available for imported resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/system_hook#token SystemHook#token}
  */
  readonly token?: string;
  /**
  * The hook URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/system_hook#url SystemHook#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/system_hook gitlab_system_hook}
*/
export class SystemHook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_system_hook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/system_hook gitlab_system_hook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemHookConfig
  */
  public constructor(scope: Construct, id: string, config: SystemHookConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_system_hook',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.4.1',
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
    this._enableSslVerification = config.enableSslVerification;
    this._id = config.id;
    this._mergeRequestsEvents = config.mergeRequestsEvents;
    this._pushEvents = config.pushEvents;
    this._repositoryUpdateEvents = config.repositoryUpdateEvents;
    this._tagPushEvents = config.tagPushEvents;
    this._token = config.token;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enable_ssl_verification - computed: false, optional: true, required: false
  private _enableSslVerification?: boolean | cdktf.IResolvable; 
  public get enableSslVerification() {
    return this.getBooleanAttribute('enable_ssl_verification');
  }
  public set enableSslVerification(value: boolean | cdktf.IResolvable) {
    this._enableSslVerification = value;
  }
  public resetEnableSslVerification() {
    this._enableSslVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslVerificationInput() {
    return this._enableSslVerification;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // merge_requests_events - computed: false, optional: true, required: false
  private _mergeRequestsEvents?: boolean | cdktf.IResolvable; 
  public get mergeRequestsEvents() {
    return this.getBooleanAttribute('merge_requests_events');
  }
  public set mergeRequestsEvents(value: boolean | cdktf.IResolvable) {
    this._mergeRequestsEvents = value;
  }
  public resetMergeRequestsEvents() {
    this._mergeRequestsEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeRequestsEventsInput() {
    return this._mergeRequestsEvents;
  }

  // push_events - computed: false, optional: true, required: false
  private _pushEvents?: boolean | cdktf.IResolvable; 
  public get pushEvents() {
    return this.getBooleanAttribute('push_events');
  }
  public set pushEvents(value: boolean | cdktf.IResolvable) {
    this._pushEvents = value;
  }
  public resetPushEvents() {
    this._pushEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEventsInput() {
    return this._pushEvents;
  }

  // repository_update_events - computed: false, optional: true, required: false
  private _repositoryUpdateEvents?: boolean | cdktf.IResolvable; 
  public get repositoryUpdateEvents() {
    return this.getBooleanAttribute('repository_update_events');
  }
  public set repositoryUpdateEvents(value: boolean | cdktf.IResolvable) {
    this._repositoryUpdateEvents = value;
  }
  public resetRepositoryUpdateEvents() {
    this._repositoryUpdateEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUpdateEventsInput() {
    return this._repositoryUpdateEvents;
  }

  // tag_push_events - computed: false, optional: true, required: false
  private _tagPushEvents?: boolean | cdktf.IResolvable; 
  public get tagPushEvents() {
    return this.getBooleanAttribute('tag_push_events');
  }
  public set tagPushEvents(value: boolean | cdktf.IResolvable) {
    this._tagPushEvents = value;
  }
  public resetTagPushEvents() {
    this._tagPushEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPushEventsInput() {
    return this._tagPushEvents;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_ssl_verification: cdktf.booleanToTerraform(this._enableSslVerification),
      id: cdktf.stringToTerraform(this._id),
      merge_requests_events: cdktf.booleanToTerraform(this._mergeRequestsEvents),
      push_events: cdktf.booleanToTerraform(this._pushEvents),
      repository_update_events: cdktf.booleanToTerraform(this._repositoryUpdateEvents),
      tag_push_events: cdktf.booleanToTerraform(this._tagPushEvents),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
    };
  }
}
