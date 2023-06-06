# `gitlab_group_hook`

Refer to the Terraform Registory for docs: [`gitlab_group_hook`](https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook).

# `groupHook` Submodule <a name="`groupHook` Submodule" id="@cdktf/provider-gitlab.groupHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupHook <a name="GroupHook" id="@cdktf/provider-gitlab.groupHook.GroupHook"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook gitlab_group_hook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/grouphook"

grouphook.NewGroupHook(scope Construct, id *string, config GroupHookConfig) GroupHook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig">GroupHookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.groupHook.GroupHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig">GroupHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialIssuesEvents">ResetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialNoteEvents">ResetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetDeploymentEvents">ResetDeploymentEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetEnableSslVerification">ResetEnableSslVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetIssuesEvents">ResetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetJobEvents">ResetJobEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetMergeRequestsEvents">ResetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetNoteEvents">ResetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetPipelineEvents">ResetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEventsBranchFilter">ResetPushEventsBranchFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetReleasesEvents">ResetReleasesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetSubgroupEvents">ResetSubgroupEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.resetWikiPageEvents">ResetWikiPageEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.groupHook.GroupHook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.groupHook.GroupHook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupHook.GroupHook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupHook.GroupHook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.groupHook.GroupHook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupHook.GroupHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.groupHook.GroupHook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.groupHook.GroupHook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupHook.GroupHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetConfidentialIssuesEvents` <a name="ResetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialIssuesEvents"></a>

```go
func ResetConfidentialIssuesEvents()
```

##### `ResetConfidentialNoteEvents` <a name="ResetConfidentialNoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetConfidentialNoteEvents"></a>

```go
func ResetConfidentialNoteEvents()
```

##### `ResetDeploymentEvents` <a name="ResetDeploymentEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetDeploymentEvents"></a>

```go
func ResetDeploymentEvents()
```

##### `ResetEnableSslVerification` <a name="ResetEnableSslVerification" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetEnableSslVerification"></a>

```go
func ResetEnableSslVerification()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuesEvents` <a name="ResetIssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetIssuesEvents"></a>

```go
func ResetIssuesEvents()
```

##### `ResetJobEvents` <a name="ResetJobEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetJobEvents"></a>

```go
func ResetJobEvents()
```

##### `ResetMergeRequestsEvents` <a name="ResetMergeRequestsEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetMergeRequestsEvents"></a>

```go
func ResetMergeRequestsEvents()
```

##### `ResetNoteEvents` <a name="ResetNoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetNoteEvents"></a>

```go
func ResetNoteEvents()
```

##### `ResetPipelineEvents` <a name="ResetPipelineEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetPipelineEvents"></a>

```go
func ResetPipelineEvents()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEvents"></a>

```go
func ResetPushEvents()
```

##### `ResetPushEventsBranchFilter` <a name="ResetPushEventsBranchFilter" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetPushEventsBranchFilter"></a>

```go
func ResetPushEventsBranchFilter()
```

##### `ResetReleasesEvents` <a name="ResetReleasesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetReleasesEvents"></a>

```go
func ResetReleasesEvents()
```

##### `ResetSubgroupEvents` <a name="ResetSubgroupEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetSubgroupEvents"></a>

```go
func ResetSubgroupEvents()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetTagPushEvents"></a>

```go
func ResetTagPushEvents()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetToken"></a>

```go
func ResetToken()
```

##### `ResetWikiPageEvents` <a name="ResetWikiPageEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.resetWikiPageEvents"></a>

```go
func ResetWikiPageEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.groupHook.GroupHook.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/grouphook"

grouphook.GroupHook_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupHook.GroupHook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/grouphook"

grouphook.GroupHook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/grouphook"

grouphook.GroupHook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupHook.GroupHook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.hookId">HookId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEventsInput">ConfidentialIssuesEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEventsInput">ConfidentialNoteEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEventsInput">DeploymentEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerificationInput">EnableSslVerificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEventsInput">IssuesEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEventsInput">JobEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEventsInput">MergeRequestsEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEventsInput">NoteEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEventsInput">PipelineEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilterInput">PushEventsBranchFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsInput">PushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEventsInput">ReleasesEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEventsInput">SubgroupEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEventsInput">WikiPageEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEvents">DeploymentEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerification">EnableSslVerification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEvents">IssuesEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEvents">JobEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEvents">NoteEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEvents">PipelineEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilter">PushEventsBranchFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEvents">ReleasesEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEvents">SubgroupEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEvents">WikiPageEvents</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `HookId`<sup>Required</sup> <a name="HookId" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.hookId"></a>

```go
func HookId() *f64
```

- *Type:* *f64

---

##### `ConfidentialIssuesEventsInput`<sup>Optional</sup> <a name="ConfidentialIssuesEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEventsInput"></a>

```go
func ConfidentialIssuesEventsInput() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialNoteEventsInput`<sup>Optional</sup> <a name="ConfidentialNoteEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEventsInput"></a>

```go
func ConfidentialNoteEventsInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentEventsInput`<sup>Optional</sup> <a name="DeploymentEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEventsInput"></a>

```go
func DeploymentEventsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSslVerificationInput`<sup>Optional</sup> <a name="EnableSslVerificationInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerificationInput"></a>

```go
func EnableSslVerificationInput() interface{}
```

- *Type:* interface{}

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuesEventsInput`<sup>Optional</sup> <a name="IssuesEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEventsInput"></a>

```go
func IssuesEventsInput() interface{}
```

- *Type:* interface{}

---

##### `JobEventsInput`<sup>Optional</sup> <a name="JobEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEventsInput"></a>

```go
func JobEventsInput() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestsEventsInput`<sup>Optional</sup> <a name="MergeRequestsEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEventsInput"></a>

```go
func MergeRequestsEventsInput() interface{}
```

- *Type:* interface{}

---

##### `NoteEventsInput`<sup>Optional</sup> <a name="NoteEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEventsInput"></a>

```go
func NoteEventsInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineEventsInput`<sup>Optional</sup> <a name="PipelineEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEventsInput"></a>

```go
func PipelineEventsInput() interface{}
```

- *Type:* interface{}

---

##### `PushEventsBranchFilterInput`<sup>Optional</sup> <a name="PushEventsBranchFilterInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilterInput"></a>

```go
func PushEventsBranchFilterInput() *string
```

- *Type:* *string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsInput"></a>

```go
func PushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `ReleasesEventsInput`<sup>Optional</sup> <a name="ReleasesEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEventsInput"></a>

```go
func ReleasesEventsInput() interface{}
```

- *Type:* interface{}

---

##### `SubgroupEventsInput`<sup>Optional</sup> <a name="SubgroupEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEventsInput"></a>

```go
func SubgroupEventsInput() interface{}
```

- *Type:* interface{}

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEventsInput"></a>

```go
func TagPushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `WikiPageEventsInput`<sup>Optional</sup> <a name="WikiPageEventsInput" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEventsInput"></a>

```go
func WikiPageEventsInput() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialIssuesEvents`<sup>Required</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialIssuesEvents"></a>

```go
func ConfidentialIssuesEvents() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialNoteEvents`<sup>Required</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.confidentialNoteEvents"></a>

```go
func ConfidentialNoteEvents() interface{}
```

- *Type:* interface{}

---

##### `DeploymentEvents`<sup>Required</sup> <a name="DeploymentEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.deploymentEvents"></a>

```go
func DeploymentEvents() interface{}
```

- *Type:* interface{}

---

##### `EnableSslVerification`<sup>Required</sup> <a name="EnableSslVerification" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.enableSslVerification"></a>

```go
func EnableSslVerification() interface{}
```

- *Type:* interface{}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.issuesEvents"></a>

```go
func IssuesEvents() interface{}
```

- *Type:* interface{}

---

##### `JobEvents`<sup>Required</sup> <a name="JobEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.jobEvents"></a>

```go
func JobEvents() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.mergeRequestsEvents"></a>

```go
func MergeRequestsEvents() interface{}
```

- *Type:* interface{}

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.noteEvents"></a>

```go
func NoteEvents() interface{}
```

- *Type:* interface{}

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pipelineEvents"></a>

```go
func PipelineEvents() interface{}
```

- *Type:* interface{}

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEvents"></a>

```go
func PushEvents() interface{}
```

- *Type:* interface{}

---

##### `PushEventsBranchFilter`<sup>Required</sup> <a name="PushEventsBranchFilter" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.pushEventsBranchFilter"></a>

```go
func PushEventsBranchFilter() *string
```

- *Type:* *string

---

##### `ReleasesEvents`<sup>Required</sup> <a name="ReleasesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.releasesEvents"></a>

```go
func ReleasesEvents() interface{}
```

- *Type:* interface{}

---

##### `SubgroupEvents`<sup>Required</sup> <a name="SubgroupEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.subgroupEvents"></a>

```go
func SubgroupEvents() interface{}
```

- *Type:* interface{}

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tagPushEvents"></a>

```go
func TagPushEvents() interface{}
```

- *Type:* interface{}

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `WikiPageEvents`<sup>Required</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.wikiPageEvents"></a>

```go
func WikiPageEvents() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.groupHook.GroupHook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupHookConfig <a name="GroupHookConfig" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/grouphook"

&grouphook.GroupHookConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Group: *string,
	Url: *string,
	ConfidentialIssuesEvents: interface{},
	ConfidentialNoteEvents: interface{},
	DeploymentEvents: interface{},
	EnableSslVerification: interface{},
	Id: *string,
	IssuesEvents: interface{},
	JobEvents: interface{},
	MergeRequestsEvents: interface{},
	NoteEvents: interface{},
	PipelineEvents: interface{},
	PushEvents: interface{},
	PushEventsBranchFilter: *string,
	ReleasesEvents: interface{},
	SubgroupEvents: interface{},
	TagPushEvents: interface{},
	Token: *string,
	WikiPageEvents: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.group">Group</a></code> | <code>*string</code> | The ID or full path of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.url">Url</a></code> | <code>*string</code> | The url of the hook to invoke. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>interface{}</code> | Invoke the hook for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>interface{}</code> | Invoke the hook for confidential notes events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.deploymentEvents">DeploymentEvents</a></code> | <code>interface{}</code> | Invoke the hook for deployment events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.enableSslVerification">EnableSslVerification</a></code> | <code>interface{}</code> | Enable ssl verification when invoking the hook. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#id GroupHook#id}. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.issuesEvents">IssuesEvents</a></code> | <code>interface{}</code> | Invoke the hook for issues events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.jobEvents">JobEvents</a></code> | <code>interface{}</code> | Invoke the hook for job events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>interface{}</code> | Invoke the hook for merge requests. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.noteEvents">NoteEvents</a></code> | <code>interface{}</code> | Invoke the hook for notes events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pipelineEvents">PipelineEvents</a></code> | <code>interface{}</code> | Invoke the hook for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | Invoke the hook for push events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEventsBranchFilter">PushEventsBranchFilter</a></code> | <code>*string</code> | Invoke the hook for push events on matching branches only. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.releasesEvents">ReleasesEvents</a></code> | <code>interface{}</code> | Invoke the hook for releases events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.subgroupEvents">SubgroupEvents</a></code> | <code>interface{}</code> | Invoke the hook for subgroup events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | Invoke the hook for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.token">Token</a></code> | <code>*string</code> | A token to present when invoking the hook. The token is not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.wikiPageEvents">WikiPageEvents</a></code> | <code>interface{}</code> | Invoke the hook for wiki page events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.group"></a>

```go
Group *string
```

- *Type:* *string

The ID or full path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#group GroupHook#group}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

The url of the hook to invoke.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#url GroupHook#url}

---

##### `ConfidentialIssuesEvents`<sup>Optional</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialIssuesEvents"></a>

```go
ConfidentialIssuesEvents interface{}
```

- *Type:* interface{}

Invoke the hook for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#confidential_issues_events GroupHook#confidential_issues_events}

---

##### `ConfidentialNoteEvents`<sup>Optional</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.confidentialNoteEvents"></a>

```go
ConfidentialNoteEvents interface{}
```

- *Type:* interface{}

Invoke the hook for confidential notes events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#confidential_note_events GroupHook#confidential_note_events}

---

##### `DeploymentEvents`<sup>Optional</sup> <a name="DeploymentEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.deploymentEvents"></a>

```go
DeploymentEvents interface{}
```

- *Type:* interface{}

Invoke the hook for deployment events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#deployment_events GroupHook#deployment_events}

---

##### `EnableSslVerification`<sup>Optional</sup> <a name="EnableSslVerification" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.enableSslVerification"></a>

```go
EnableSslVerification interface{}
```

- *Type:* interface{}

Enable ssl verification when invoking the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#enable_ssl_verification GroupHook#enable_ssl_verification}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#id GroupHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuesEvents`<sup>Optional</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.issuesEvents"></a>

```go
IssuesEvents interface{}
```

- *Type:* interface{}

Invoke the hook for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#issues_events GroupHook#issues_events}

---

##### `JobEvents`<sup>Optional</sup> <a name="JobEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.jobEvents"></a>

```go
JobEvents interface{}
```

- *Type:* interface{}

Invoke the hook for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#job_events GroupHook#job_events}

---

##### `MergeRequestsEvents`<sup>Optional</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.mergeRequestsEvents"></a>

```go
MergeRequestsEvents interface{}
```

- *Type:* interface{}

Invoke the hook for merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#merge_requests_events GroupHook#merge_requests_events}

---

##### `NoteEvents`<sup>Optional</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.noteEvents"></a>

```go
NoteEvents interface{}
```

- *Type:* interface{}

Invoke the hook for notes events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#note_events GroupHook#note_events}

---

##### `PipelineEvents`<sup>Optional</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pipelineEvents"></a>

```go
PipelineEvents interface{}
```

- *Type:* interface{}

Invoke the hook for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#pipeline_events GroupHook#pipeline_events}

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEvents"></a>

```go
PushEvents interface{}
```

- *Type:* interface{}

Invoke the hook for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#push_events GroupHook#push_events}

---

##### `PushEventsBranchFilter`<sup>Optional</sup> <a name="PushEventsBranchFilter" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.pushEventsBranchFilter"></a>

```go
PushEventsBranchFilter *string
```

- *Type:* *string

Invoke the hook for push events on matching branches only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#push_events_branch_filter GroupHook#push_events_branch_filter}

---

##### `ReleasesEvents`<sup>Optional</sup> <a name="ReleasesEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.releasesEvents"></a>

```go
ReleasesEvents interface{}
```

- *Type:* interface{}

Invoke the hook for releases events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#releases_events GroupHook#releases_events}

---

##### `SubgroupEvents`<sup>Optional</sup> <a name="SubgroupEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.subgroupEvents"></a>

```go
SubgroupEvents interface{}
```

- *Type:* interface{}

Invoke the hook for subgroup events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#subgroup_events GroupHook#subgroup_events}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.tagPushEvents"></a>

```go
TagPushEvents interface{}
```

- *Type:* interface{}

Invoke the hook for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#tag_push_events GroupHook#tag_push_events}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

A token to present when invoking the hook. The token is not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#token GroupHook#token}

---

##### `WikiPageEvents`<sup>Optional</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.groupHook.GroupHookConfig.property.wikiPageEvents"></a>

```go
WikiPageEvents interface{}
```

- *Type:* interface{}

Invoke the hook for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/group_hook#wiki_page_events GroupHook#wiki_page_events}

---



