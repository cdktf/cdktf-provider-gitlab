# `serviceJira` Submodule <a name="`serviceJira` Submodule" id="@cdktf/provider-gitlab.serviceJira"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceJira <a name="ServiceJira" id="@cdktf/provider-gitlab.serviceJira.ServiceJira"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira gitlab_service_jira}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/servicejira"

servicejira.NewServiceJira(scope Construct, id *string, config ServiceJiraConfig) ServiceJira
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig">ServiceJiraConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig">ServiceJiraConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetCommentOnEventEnabled">ResetCommentOnEventEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetCommitEvents">ResetCommitEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetIssuesEvents">ResetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraIssueTransitionId">ResetJiraIssueTransitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJobEvents">ResetJobEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetMergeRequestsEvents">ResetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetNoteEvents">ResetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetPipelineEvents">ResetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetProjectKey">ResetProjectKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetApiUrl"></a>

```go
func ResetApiUrl()
```

##### `ResetCommentOnEventEnabled` <a name="ResetCommentOnEventEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetCommentOnEventEnabled"></a>

```go
func ResetCommentOnEventEnabled()
```

##### `ResetCommitEvents` <a name="ResetCommitEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetCommitEvents"></a>

```go
func ResetCommitEvents()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuesEvents` <a name="ResetIssuesEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetIssuesEvents"></a>

```go
func ResetIssuesEvents()
```

##### `ResetJiraIssueTransitionId` <a name="ResetJiraIssueTransitionId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraIssueTransitionId"></a>

```go
func ResetJiraIssueTransitionId()
```

##### `ResetJobEvents` <a name="ResetJobEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJobEvents"></a>

```go
func ResetJobEvents()
```

##### `ResetMergeRequestsEvents` <a name="ResetMergeRequestsEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetMergeRequestsEvents"></a>

```go
func ResetMergeRequestsEvents()
```

##### `ResetNoteEvents` <a name="ResetNoteEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetNoteEvents"></a>

```go
func ResetNoteEvents()
```

##### `ResetPipelineEvents` <a name="ResetPipelineEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetPipelineEvents"></a>

```go
func ResetPipelineEvents()
```

##### `ResetProjectKey` <a name="ResetProjectKey" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetProjectKey"></a>

```go
func ResetProjectKey()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetPushEvents"></a>

```go
func ResetPushEvents()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetTagPushEvents"></a>

```go
func ResetTagPushEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/servicejira"

servicejira.ServiceJira_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/servicejira"

servicejira.ServiceJira_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/servicejira"

servicejira.ServiceJira_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.apiUrlInput">ApiUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commentOnEventEnabledInput">CommentOnEventEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commitEventsInput">CommitEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.issuesEventsInput">IssuesEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionIdInput">JiraIssueTransitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jobEventsInput">JobEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.mergeRequestsEventsInput">MergeRequestsEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.noteEventsInput">NoteEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pipelineEventsInput">PipelineEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKeyInput">ProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pushEventsInput">PushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commentOnEventEnabled">CommentOnEventEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commitEvents">CommitEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.issuesEvents">IssuesEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionId">JiraIssueTransitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jobEvents">JobEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.noteEvents">NoteEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pipelineEvents">PipelineEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKey">ProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.apiUrlInput"></a>

```go
func ApiUrlInput() *string
```

- *Type:* *string

---

##### `CommentOnEventEnabledInput`<sup>Optional</sup> <a name="CommentOnEventEnabledInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commentOnEventEnabledInput"></a>

```go
func CommentOnEventEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CommitEventsInput`<sup>Optional</sup> <a name="CommitEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commitEventsInput"></a>

```go
func CommitEventsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuesEventsInput`<sup>Optional</sup> <a name="IssuesEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.issuesEventsInput"></a>

```go
func IssuesEventsInput() interface{}
```

- *Type:* interface{}

---

##### `JiraIssueTransitionIdInput`<sup>Optional</sup> <a name="JiraIssueTransitionIdInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionIdInput"></a>

```go
func JiraIssueTransitionIdInput() *string
```

- *Type:* *string

---

##### `JobEventsInput`<sup>Optional</sup> <a name="JobEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jobEventsInput"></a>

```go
func JobEventsInput() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestsEventsInput`<sup>Optional</sup> <a name="MergeRequestsEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.mergeRequestsEventsInput"></a>

```go
func MergeRequestsEventsInput() interface{}
```

- *Type:* interface{}

---

##### `NoteEventsInput`<sup>Optional</sup> <a name="NoteEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.noteEventsInput"></a>

```go
func NoteEventsInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PipelineEventsInput`<sup>Optional</sup> <a name="PipelineEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pipelineEventsInput"></a>

```go
func PipelineEventsInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKeyInput"></a>

```go
func ProjectKeyInput() *string
```

- *Type:* *string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pushEventsInput"></a>

```go
func PushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tagPushEventsInput"></a>

```go
func TagPushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.apiUrl"></a>

```go
func ApiUrl() *string
```

- *Type:* *string

---

##### `CommentOnEventEnabled`<sup>Required</sup> <a name="CommentOnEventEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commentOnEventEnabled"></a>

```go
func CommentOnEventEnabled() interface{}
```

- *Type:* interface{}

---

##### `CommitEvents`<sup>Required</sup> <a name="CommitEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commitEvents"></a>

```go
func CommitEvents() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.issuesEvents"></a>

```go
func IssuesEvents() interface{}
```

- *Type:* interface{}

---

##### `JiraIssueTransitionId`<sup>Required</sup> <a name="JiraIssueTransitionId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionId"></a>

```go
func JiraIssueTransitionId() *string
```

- *Type:* *string

---

##### `JobEvents`<sup>Required</sup> <a name="JobEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jobEvents"></a>

```go
func JobEvents() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.mergeRequestsEvents"></a>

```go
func MergeRequestsEvents() interface{}
```

- *Type:* interface{}

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.noteEvents"></a>

```go
func NoteEvents() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pipelineEvents"></a>

```go
func PipelineEvents() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKey"></a>

```go
func ProjectKey() *string
```

- *Type:* *string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pushEvents"></a>

```go
func PushEvents() interface{}
```

- *Type:* interface{}

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tagPushEvents"></a>

```go
func TagPushEvents() interface{}
```

- *Type:* interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceJiraConfig <a name="ServiceJiraConfig" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/servicejira"

&servicejira.ServiceJiraConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Password: *string,
	Project: *string,
	Url: *string,
	Username: *string,
	ApiUrl: *string,
	CommentOnEventEnabled: interface{},
	CommitEvents: interface{},
	Id: *string,
	IssuesEvents: interface{},
	JiraIssueTransitionId: *string,
	JobEvents: interface{},
	MergeRequestsEvents: interface{},
	NoteEvents: interface{},
	PipelineEvents: interface{},
	ProjectKey: *string,
	PushEvents: interface{},
	TagPushEvents: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.password">Password</a></code> | <code>*string</code> | The password of the user created to be used with GitLab/JIRA. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.project">Project</a></code> | <code>*string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.url">Url</a></code> | <code>*string</code> | The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.username">Username</a></code> | <code>*string</code> | The username of the user created to be used with GitLab/JIRA. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.apiUrl">ApiUrl</a></code> | <code>*string</code> | The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.commentOnEventEnabled">CommentOnEventEnabled</a></code> | <code>interface{}</code> | Enable comments inside Jira issues on each GitLab event (commit / merge request). |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.commitEvents">CommitEvents</a></code> | <code>interface{}</code> | Enable notifications for commit events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#id ServiceJira#id}. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.issuesEvents">IssuesEvents</a></code> | <code>interface{}</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraIssueTransitionId">JiraIssueTransitionId</a></code> | <code>*string</code> | The ID of a transition that moves issues to a closed state. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jobEvents">JobEvents</a></code> | <code>interface{}</code> | Enable notifications for job events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>interface{}</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.noteEvents">NoteEvents</a></code> | <code>interface{}</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.pipelineEvents">PipelineEvents</a></code> | <code>interface{}</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.projectKey">ProjectKey</a></code> | <code>*string</code> | The short identifier for your JIRA project, all uppercase, e.g., PROJ. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | Enable notifications for tag_push events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password of the user created to be used with GitLab/JIRA.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#password ServiceJira#password}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#project ServiceJira#project}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#url ServiceJira#url}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username of the user created to be used with GitLab/JIRA.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#username ServiceJira#username}

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.apiUrl"></a>

```go
ApiUrl *string
```

- *Type:* *string

The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#api_url ServiceJira#api_url}

---

##### `CommentOnEventEnabled`<sup>Optional</sup> <a name="CommentOnEventEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.commentOnEventEnabled"></a>

```go
CommentOnEventEnabled interface{}
```

- *Type:* interface{}

Enable comments inside Jira issues on each GitLab event (commit / merge request).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#comment_on_event_enabled ServiceJira#comment_on_event_enabled}

---

##### `CommitEvents`<sup>Optional</sup> <a name="CommitEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.commitEvents"></a>

```go
CommitEvents interface{}
```

- *Type:* interface{}

Enable notifications for commit events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#commit_events ServiceJira#commit_events}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#id ServiceJira#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuesEvents`<sup>Optional</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.issuesEvents"></a>

```go
IssuesEvents interface{}
```

- *Type:* interface{}

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#issues_events ServiceJira#issues_events}

---

##### `JiraIssueTransitionId`<sup>Optional</sup> <a name="JiraIssueTransitionId" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraIssueTransitionId"></a>

```go
JiraIssueTransitionId *string
```

- *Type:* *string

The ID of a transition that moves issues to a closed state.

You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2. *Note**: importing this field is only supported since GitLab 15.2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#jira_issue_transition_id ServiceJira#jira_issue_transition_id}

---

##### `JobEvents`<sup>Optional</sup> <a name="JobEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jobEvents"></a>

```go
JobEvents interface{}
```

- *Type:* interface{}

Enable notifications for job events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#job_events ServiceJira#job_events}

---

##### `MergeRequestsEvents`<sup>Optional</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.mergeRequestsEvents"></a>

```go
MergeRequestsEvents interface{}
```

- *Type:* interface{}

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#merge_requests_events ServiceJira#merge_requests_events}

---

##### `NoteEvents`<sup>Optional</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.noteEvents"></a>

```go
NoteEvents interface{}
```

- *Type:* interface{}

Enable notifications for note events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#note_events ServiceJira#note_events}

---

##### `PipelineEvents`<sup>Optional</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.pipelineEvents"></a>

```go
PipelineEvents interface{}
```

- *Type:* interface{}

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#pipeline_events ServiceJira#pipeline_events}

---

##### `ProjectKey`<sup>Optional</sup> <a name="ProjectKey" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.projectKey"></a>

```go
ProjectKey *string
```

- *Type:* *string

The short identifier for your JIRA project, all uppercase, e.g., PROJ.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#project_key ServiceJira#project_key}

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.pushEvents"></a>

```go
PushEvents interface{}
```

- *Type:* interface{}

Enable notifications for push events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#push_events ServiceJira#push_events}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.tagPushEvents"></a>

```go
TagPushEvents interface{}
```

- *Type:* interface{}

Enable notifications for tag_push events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_jira#tag_push_events ServiceJira#tag_push_events}

---



