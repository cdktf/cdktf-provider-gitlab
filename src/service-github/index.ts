// https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/service_github
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceGithubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/service_github#id ServiceGithub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the project you want to activate integration on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/service_github#project ServiceGithub#project}
  */
  readonly project: string;
  /**
  * The URL of the GitHub repo to integrate with, e,g, https://github.com/gitlabhq/terraform-provider-gitlab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/service_github#repository_url ServiceGithub#repository_url}
  */
  readonly repositoryUrl: string;
  /**
  * Append instance name instead of branch to the status. Must enable to set a GitLab status check as _required_ in GitHub. See [Static / dynamic status check names] to learn more.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/service_github#static_context ServiceGithub#static_context}
  */
  readonly staticContext?: boolean | cdktf.IResolvable;
  /**
  * A GitHub personal access token with at least `repo:status` scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/service_github#token ServiceGithub#token}
  */
  readonly token: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/service_github gitlab_service_github}
*/
export class ServiceGithub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_service_github";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.3.0/docs/resources/service_github gitlab_service_github} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceGithubConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceGithubConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_service_github',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.3.0',
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
    this._id = config.id;
    this._project = config.project;
    this._repositoryUrl = config.repositoryUrl;
    this._staticContext = config.staticContext;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }

  // static_context - computed: false, optional: true, required: false
  private _staticContext?: boolean | cdktf.IResolvable; 
  public get staticContext() {
    return this.getBooleanAttribute('static_context');
  }
  public set staticContext(value: boolean | cdktf.IResolvable) {
    this._staticContext = value;
  }
  public resetStaticContext() {
    this._staticContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticContextInput() {
    return this._staticContext;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      repository_url: cdktf.stringToTerraform(this._repositoryUrl),
      static_context: cdktf.booleanToTerraform(this._staticContext),
      token: cdktf.stringToTerraform(this._token),
    };
  }
}
