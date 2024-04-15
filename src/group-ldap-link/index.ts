// https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/group_ldap_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupLdapLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Minimum access level for members of the LDAP group. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/group_ldap_link#access_level GroupLdapLink#access_level}
  */
  readonly accessLevel?: string;
  /**
  * The CN of the LDAP group to link with. Required if `filter` is not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/group_ldap_link#cn GroupLdapLink#cn}
  */
  readonly cn?: string;
  /**
  * The LDAP filter for the group. Required if `cn` is not provided. Requires GitLab Premium or above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/group_ldap_link#filter GroupLdapLink#filter}
  */
  readonly filter?: string;
  /**
  * If true, then delete and replace an existing LDAP link if one exists. Will also remove an LDAP link if the parent group is not found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/group_ldap_link#force GroupLdapLink#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * The ID or URL-encoded path of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/group_ldap_link#group GroupLdapLink#group}
  */
  readonly group: string;
  /**
  * Minimum access level for members of the LDAP group. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/group_ldap_link#group_access GroupLdapLink#group_access}
  */
  readonly groupAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/group_ldap_link#id GroupLdapLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the LDAP provider as stored in the GitLab database. Note that this is NOT the value of the `label` attribute as shown in the web UI. In most cases this will be `ldapmain` but you may use the [LDAP check rake task](https://docs.gitlab.com/ee/administration/raketasks/ldap.html#check) for receiving the LDAP server name: `LDAP: ... Server: ldapmain`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/group_ldap_link#ldap_provider GroupLdapLink#ldap_provider}
  */
  readonly ldapProvider: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/group_ldap_link gitlab_group_ldap_link}
*/
export class GroupLdapLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_ldap_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupLdapLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupLdapLink to import
  * @param importFromId The id of the existing GroupLdapLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/group_ldap_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupLdapLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_group_ldap_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/group_ldap_link gitlab_group_ldap_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupLdapLinkConfig
  */
  public constructor(scope: Construct, id: string, config: GroupLdapLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_ldap_link',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.10.0',
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
    this._accessLevel = config.accessLevel;
    this._cn = config.cn;
    this._filter = config.filter;
    this._force = config.force;
    this._group = config.group;
    this._groupAccess = config.groupAccess;
    this._id = config.id;
    this._ldapProvider = config.ldapProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // cn - computed: true, optional: true, required: false
  private _cn?: string; 
  public get cn() {
    return this.getStringAttribute('cn');
  }
  public set cn(value: string) {
    this._cn = value;
  }
  public resetCn() {
    this._cn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnInput() {
    return this._cn;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // group_access - computed: false, optional: true, required: false
  private _groupAccess?: string; 
  public get groupAccess() {
    return this.getStringAttribute('group_access');
  }
  public set groupAccess(value: string) {
    this._groupAccess = value;
  }
  public resetGroupAccess() {
    this._groupAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAccessInput() {
    return this._groupAccess;
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

  // ldap_provider - computed: false, optional: false, required: true
  private _ldapProvider?: string; 
  public get ldapProvider() {
    return this.getStringAttribute('ldap_provider');
  }
  public set ldapProvider(value: string) {
    this._ldapProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapProviderInput() {
    return this._ldapProvider;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      cn: cdktf.stringToTerraform(this._cn),
      filter: cdktf.stringToTerraform(this._filter),
      force: cdktf.booleanToTerraform(this._force),
      group: cdktf.stringToTerraform(this._group),
      group_access: cdktf.stringToTerraform(this._groupAccess),
      id: cdktf.stringToTerraform(this._id),
      ldap_provider: cdktf.stringToTerraform(this._ldapProvider),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cn: {
        value: cdktf.stringToHclTerraform(this._cn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_access: {
        value: cdktf.stringToHclTerraform(this._groupAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_provider: {
        value: cdktf.stringToHclTerraform(this._ldapProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
